const fieldLimits = {
  name: 120,
  email: 254,
  organisation: 180,
  number_of_homes: 20,
  message: 3000,
} as const;
const allowedHomeCounts = new Set(["1", "2-5", "6-10", "11+"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(form: FormData, name: keyof typeof fieldLimits) {
  const value = form.get(name);
  return typeof value === "string" ? value.trim().slice(0, fieldLimits[name]) : "";
}

function redirectTo(request: Request, path: string) {
  return Response.redirect(new URL(path, request.url), 303);
}

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "POST" },
      });
    }

    const destination = process.env.CONTACT_EMAIL;

    if (!destination) {
      return new Response("Contact form is not configured.", { status: 503 });
    }

    const form = await request.formData();
    const honeypot = form.get("_honey");

    if (typeof honeypot === "string" && honeypot.trim()) {
      return redirectTo(request, "/thank-you");
    }

    const submission = {
      name: readField(form, "name"),
      email: readField(form, "email"),
      organisation: readField(form, "organisation"),
      number_of_homes: readField(form, "number_of_homes"),
      message: readField(form, "message"),
    };
    const consent = form.get("contact_consent");

    if (
      !submission.name ||
      !emailPattern.test(submission.email) ||
      !submission.organisation ||
      !allowedHomeCounts.has(submission.number_of_homes) ||
      !submission.message ||
      consent !== "Yes"
    ) {
      return new Response("Please complete every required field.", { status: 400 });
    }

    let delivery: Response;

    try {
      delivery = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destination)}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...submission,
          contact_consent: consent,
          _subject: "New CareMin walkthrough request",
          _template: "table",
          _url: new URL("/#contact", request.url).toString(),
        }),
      });
    } catch {
      return new Response("The request could not be sent. Please try again.", { status: 502 });
    }

    if (!delivery.ok) {
      return new Response("The request could not be sent. Please try again.", { status: 502 });
    }

    return redirectTo(request, "/thank-you");
  },
};
