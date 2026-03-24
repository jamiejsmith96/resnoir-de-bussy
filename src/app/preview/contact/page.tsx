export default function ContactEmailPreview() {
  return (
    <div style={{ background: "#f4f4f4", padding: "40px 0", minHeight: "100vh" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", background: "#fff", borderRadius: 4, overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #2C2C2C; font-weight: normal; margin-bottom: 8px;">New Message</h1>
          <div style="width: 40px; height: 1px; background: #B8965A; margin-bottom: 32px;"></div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #3D3D3D;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B; width: 140px;">From</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; font-weight: 500;">James Thornton</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4; color: #6B6B6B;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D4;"><a href="#" style="color: #B8965A;">james.thornton@example.com</a></td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 24px; background: #FAF7F2; border-left: 3px solid #B8965A;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #3D3D3D;">Hi Resnoir, I came across your website and I'm curious about your work. I've been experiencing recurring nightmares and a general sense of heaviness for the past year. I'm not sure if this falls within what you do, but I'd love to have a conversation about it. Thank you.</p>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #6B6B6B;">Reply directly to this email to respond to James Thornton.</p>
        </div>
      ` }} />
    </div>
  );
}
