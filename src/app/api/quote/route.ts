export const runtime = "edge";
export const dynamic = "force-dynamic";

type QuotePayload = {
  company?: string;
  contact?: string;
  email?: string;
  phone?: string;
  workshop?: string;
  size?: string;
  message?: string;
  website?: string; // honeypot
};

const esc = (s = "") =>
  s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as QuotePayload;

    // Honeypot
    if (data.website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Minimal server-side checks
    if (!data.email || !data.company || !data.contact) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400 });
    }

    const html = `
      <h2>Ny offertförfrågan</h2>
      <p><strong>Företag:</strong> ${esc(data.company)}</p>
      <p><strong>Kontaktperson:</strong> ${esc(data.contact)}</p>
      <p><strong>E-post:</strong> ${esc(data.email)}</p>
      <p><strong>Telefon:</strong> ${esc(data.phone)}</p>
      <p><strong>Workshop:</strong> ${esc(data.workshop)}</p>
      <p><strong>Antal anställda:</strong> ${esc(data.size)}</p>
      <p><strong>Meddelande:</strong><br>${esc(data.message).replace(/\n/g, "<br>")}</p>
    `;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AI Workshops <info@aiworkshops.se>", // must be a verified domain/sender in Resend
        to: ["karl.berg@aiworkshops.se"],
        reply_to: data.email,
        subject: `Offertförfrågan – ${data.company || "Okänt företag"}`,
        html,
        tags: [{ name: "category", value: "quote-request" }],
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return new Response(JSON.stringify({ ok: false, error: err }), { status: 502 });
    }

    // Optional confirmation
    if (data.email) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "AI Workshops <info@aiworkshops.se>",
          to: [data.email],
          subject: "Tack för din förfrågan",
          html: `<p>Hej ${esc(data.contact) || ""}, tack! Vi återkommer inom 24 timmar.</p>`,
          tags: [{ name: "category", value: "quote-confirmation" }],
        }),
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "Bad request" }), { status: 400 });
  }
}
