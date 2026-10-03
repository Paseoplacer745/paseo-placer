import { NextResponse } from "next/server";
import { Resend } from "resend";

const LABELS: Record<string, string> = {
  opcion: "Opción", tipo: "Tipo de evento", fecha: "Fecha tentativa", invitados: "N° de invitados",
  marca: "Marca o empresa", rubro: "Rubro", m2: "Superficie requerida (m²)",
  nombre: "Nombre", correo: "Correo", telefono: "Teléfono", mensaje: "Mensaje",
};

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

export async function POST(req: Request) {
  let body: Record<string, string>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 }); }

  // Bots que llenan el campo oculto: respondemos OK sin enviar nada.
  if (body.empresa_web) return NextResponse.json({ ok: true });

  const kind = body.kind === "arriendo" ? "arriendo" : "evento";
  const nombre = (body.nombre || "").trim();
  const correo = (body.correo || "").trim();
  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return NextResponse.json({ error: "Revisa tu nombre y correo." }, { status: 422 });
  }

  const to = kind === "arriendo"
    ? process.env.MAIL_TO_ARRIENDO || "arriendo@paseoplacer.com"
    : process.env.MAIL_TO_RESERVAS || "reservas@paseoplacer.com";
  const subject = kind === "arriendo"
    ? `Arriendo: ${body.opcion || ""} · ${body.marca || nombre}`
    : `Cotización de evento: ${body.opcion || ""} · ${body.tipo || ""} · ${nombre}`;

  const rows = Object.entries(LABELS)
    .filter(([k]) => body[k])
    .map(([k, l]) => `<tr><td style="padding:6px 12px;color:#666">${l}</td><td style="padding:6px 12px"><b>${esc(String(body[k]).slice(0, 2000))}</b></td></tr>`)
    .join("");
  const html = `<h2 style="font-family:Georgia,serif">${esc(subject)}</h2><table>${rows}</table><p style="color:#888;font-size:12px">Enviado desde el formulario de paseoplacer.com</p>`;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log("[contacto] RESEND_API_KEY no configurada. Solicitud recibida:", { to, subject, body });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM || "Paseo Placer <web@paseoplacer.com>",
      to,
      replyTo: correo,
      subject,
      html,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("[contacto] Error al enviar:", e);
    return NextResponse.json({ error: "No pudimos enviar tu solicitud en este momento." }, { status: 502 });
  }
}
