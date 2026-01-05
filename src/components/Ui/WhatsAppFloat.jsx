"use client";

import Link from "next/link";

const WHATSAPP_NUMBER_E164 = "919945419001";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
    "Hi Phoenix Recycling, I want to scrap my vehicle / sell industrial scrap."
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      aria-label="WhatsApp"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 9999,
        width: 56,
        height: 56,
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        background: "var(--accent-bg)",
        color: "#fff",
      }}
    >
      <i className="ri-whatsapp-line" style={{ fontSize: 26 }} />
    </Link>
  );
}
