function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  if (digits.startsWith("0") && digits.length === 11) {
    return `91${digits.slice(1)}`;
  }
  return digits;
}

export async function sendWhatsAppMessage(
  toPhone: string,
  body: string,
): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneNumberId) {
    console.warn("WhatsApp credentials missing; skipping message send");
    return { ok: false, error: "WhatsApp not configured" };
  }

  const to = normalizePhone(toPhone);
  if (!to) {
    return { ok: false, error: "Invalid phone number" };
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { preview_url: false, body },
        }),
      },
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("WhatsApp send failed:", errText);
      return { ok: false, error: errText };
    }

    return { ok: true };
  } catch (error) {
    console.error("WhatsApp send error:", error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export function bookingConfirmationMessage(params: {
  name: string;
  service: string;
  date: string;
  timeSlot: string;
}): string {
  return `Hi ${params.name}, your Vivace booking for ${params.service} on ${params.date} at ${params.timeSlot} is confirmed. We look forward to seeing you!`;
}
