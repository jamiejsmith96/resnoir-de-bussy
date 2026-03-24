export default function ContactConfirmationPreview() {
  return (
    <div style={{ background: "#f4f4f4", padding: "40px 0", minHeight: "100vh" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", background: "#fff", borderRadius: 4, overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #2C2C2C; font-weight: normal; margin-bottom: 8px;">Thank You, James</h1>
          <div style="width: 40px; height: 1px; background: #B8965A; margin-bottom: 32px;"></div>

          <p style="font-size: 15px; line-height: 1.8; color: #3D3D3D;">
            Your message has been received. I personally read every enquiry and will respond within 24 hours.
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #3D3D3D;">
            If your matter is urgent or you would prefer to speak directly, please don&rsquo;t hesitate to book a free discovery call through the website.
          </p>

          <p style="margin-top: 32px; font-size: 13px; color: #6B6B6B;">
            With warmth,<br>
            <strong style="color: #2C2C2C;">Resnoir de Bussy</strong><br>
            Shamanic Practitioner
          </p>
        </div>
      ` }} />
    </div>
  );
}
