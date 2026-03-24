import Link from "next/link";

export default function PreviewIndex() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF7F2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <h1
          style={{
            fontSize: 28,
            color: "#2C2C2C",
            fontWeight: "normal",
            marginBottom: 8,
          }}
        >
          Email Previews
        </h1>
        <div
          style={{
            width: 40,
            height: 1,
            background: "#B8965A",
            margin: "0 auto 40px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Link
            href="/preview/booking"
            style={{
              display: "block",
              padding: "20px 32px",
              border: "1px solid #E8E0D4",
              color: "#3D3D3D",
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            <strong style={{ display: "block", marginBottom: 4 }}>
              Booking Notification
            </strong>
            <span style={{ fontSize: 13, color: "#6B6B6B" }}>
              Sent to Resnoir when a client submits a booking
            </span>
          </Link>

          <Link
            href="/preview/confirmation"
            style={{
              display: "block",
              padding: "20px 32px",
              border: "1px solid #E8E0D4",
              color: "#3D3D3D",
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            <strong style={{ display: "block", marginBottom: 4 }}>
              Client Confirmation
            </strong>
            <span style={{ fontSize: 13, color: "#6B6B6B" }}>
              Auto-reply sent to the client after booking
            </span>
          </Link>
        </div>

        <p style={{ marginTop: 40, fontSize: 12, color: "#6B6B6B" }}>
          These previews show sample data. Real emails use submitted form
          values.
        </p>
      </div>
    </div>
  );
}
