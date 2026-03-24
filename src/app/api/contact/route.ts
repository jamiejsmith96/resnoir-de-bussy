import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function getRecipient() {
  return process.env.CONTACT_EMAIL || "hello@resnoirdebussy.com";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await getResend().emails.send({
      from: "Resnoir de Bussy Website <contact@resnoirdebussy.com>",
      to: getRecipient(),
      replyTo: email,
      subject: `Contact Form — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #2C2C2C; font-weight: normal; margin-bottom: 8px;">New Message</h1>
          <div style="width: 40px; height: 1px; background: #B8965A; margin-bottom: 32px;"></div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #3D3D3D;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B; width: 140px;">From</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4;"><a href="mailto:${email}" style="color: #B8965A;">${email}</a></td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 24px; background: #FAF7F2; border-left: 3px solid #B8965A;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #3D3D3D; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #6B6B6B;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
