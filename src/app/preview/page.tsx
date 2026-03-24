import Link from "next/link";

const emails = [
  {
    href: "/preview/booking",
    title: "Booking Notification",
    desc: "Sent to you when a client submits a booking request",
    tag: "To Resnoir",
  },
  {
    href: "/preview/confirmation",
    title: "Booking Auto-Reply",
    desc: "Sent to the client confirming their booking was received",
    tag: "To Client",
  },
  {
    href: "/preview/contact",
    title: "Contact Notification",
    desc: "Sent to you when someone submits the contact form",
    tag: "To Resnoir",
  },
  {
    href: "/preview/contact-confirmation",
    title: "Contact Auto-Reply",
    desc: "Sent to the sender confirming their message was received",
    tag: "To Client",
  },
];

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
        padding: "40px 20px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 480, width: "100%" }}>
        <h1 style={{ fontSize: 28, color: "#2C2C2C", fontWeight: "normal", marginBottom: 8 }}>
          Email Previews
        </h1>
        <div style={{ width: 40, height: 1, background: "#B8965A", margin: "0 auto 40px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {emails.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              style={{
                display: "block",
                padding: "20px 24px",
                border: "1px solid #E8E0D4",
                color: "#3D3D3D",
                textDecoration: "none",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <strong style={{ fontSize: 15 }}>{e.title}</strong>
                <span style={{
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: e.tag === "To Client" ? "#8A9A7B" : "#B8965A",
                  border: `1px solid ${e.tag === "To Client" ? "#A8B89A" : "#D4B87A"}`,
                  padding: "2px 8px",
                  borderRadius: 20,
                }}>
                  {e.tag}
                </span>
              </div>
              <span style={{ fontSize: 13, color: "#6B6B6B" }}>{e.desc}</span>
            </Link>
          ))}
        </div>

        <p style={{ marginTop: 40, fontSize: 12, color: "#6B6B6B" }}>
          Previews show sample data. Real emails use submitted form values.
        </p>
      </div>
    </div>
  );
}
