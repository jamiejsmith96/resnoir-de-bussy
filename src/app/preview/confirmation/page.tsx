export default function ConfirmationEmailPreview() {
  return (
    <div
      style={{ background: "#f4f4f4", padding: "40px 0", minHeight: "100vh" }}
    >
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 4,
          overflow: "hidden",
        }}
        dangerouslySetInnerHTML={{
          __html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #2C2C2C; font-weight: normal; margin-bottom: 8px;">Thank You, Sarah</h1>
          <div style="width: 40px; height: 1px; background: #B8965A; margin-bottom: 32px;"></div>

          <p style="font-size: 15px; line-height: 1.8; color: #3D3D3D;">
            Your booking request has been received. I will be in touch within 24 hours to confirm your session and share preparation details.
          </p>

          <p style="font-size: 15px; line-height: 1.8; color: #3D3D3D;">
            In the meantime, take a moment to rest and honour this step you have taken toward your healing.
          </p>

          <div style="margin-top: 32px; padding: 24px; background: #FAF7F2;">
            <p style="margin: 0 0 4px; font-size: 13px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Session Requested</p>
            <p style="margin: 0; font-size: 15px; color: #3D3D3D;">Healing Session (£150, 60–90 min)</p>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #6B6B6B;">
            With warmth,<br>
            <strong style="color: #2C2C2C;">Resnoir de Bussy</strong><br>
            Shamanic Practitioner
          </p>
        </div>
      `,
        }}
      />
    </div>
  );
}
