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
    const { name, email, phone, intention, sessionType, date } = body;

    if (!name?.trim() || !email?.trim() || !intention?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and intention are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const sessionLabels: Record<string, string> = {
      discovery: "Discovery Call (Free, 20 min)",
      single: "Healing Session (£150, 60–90 min)",
      package: "Deep Transformation Package (£400, 3 sessions)",
    };

    // Email to Resnoir
    await getResend().emails.send({
      from: "Resnoir de Bussy Website <bookings@resnoirdebussy.com>",
      to: getRecipient(),
      replyTo: email,
      subject: `New Booking Request — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #2C2C2C; font-weight: normal; margin-bottom: 8px;">New Booking Request</h1>
          <div style="width: 40px; height: 1px; background: #B8965A; margin-bottom: 32px;"></div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #3D3D3D;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4;"><a href="mailto:${email}" style="color: #B8965A;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B;">Session</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4;">${sessionLabels[sessionType] || sessionType}</td>
            </tr>
            ${date ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B;">Preferred Date</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4;">${date}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 32px; padding: 24px; background: #FAF7F2; border-left: 3px solid #B8965A;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Intention</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #3D3D3D;">${intention}</p>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #6B6B6B;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    // Confirmation email to client
    await getResend().emails.send({
      from: "Resnoir de Bussy <bookings@resnoirdebussy.com>",
      to: email,
      subject: "Your Booking Request — Resnoir de Bussy",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #2C2C2C; font-weight: normal; margin-bottom: 8px;">Thank You, ${name}</h1>
          <div style="width: 40px; height: 1px; background: #B8965A; margin-bottom: 32px;"></div>

          <p style="font-size: 15px; line-height: 1.8; color: #3D3D3D;">
            Your booking request has been received. I will be in touch within 24 hours to confirm your session and share preparation details.
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #3D3D3D;">
            In the meantime, take a moment to rest and honour this step you have taken toward your healing.
          </p>

          <div style="margin-top: 32px; padding: 24px; background: #FAF7F2;">
            <p style="margin: 0 0 4px; font-size: 13px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Your Booking Details</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #3D3D3D; margin-top: 12px;">
              <tr>
                <td style="padding: 8px 0; color: #6B6B6B; width: 120px;">Session</td>
                <td style="padding: 8px 0;">${sessionLabels[sessionType] || sessionType}</td>
              </tr>
              ${date ? `<tr>
                <td style="padding: 8px 0; color: #6B6B6B;">Preferred Date</td>
                <td style="padding: 8px 0;">${date}</td>
              </tr>` : ""}
            </table>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #6B6B6B;">
            With warmth,<br>
            <strong style="color: #2C2C2C;">Resnoir de Bussy</strong><br>
            Shamanic Practitioner
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request. Please try again." },
      { status: 500 }
    );
  }
}
