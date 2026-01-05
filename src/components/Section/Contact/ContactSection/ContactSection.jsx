"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER_E164 = "919945419001";

export default function ContactSection() {
  const [mode, setMode] = useState("quote"); // quote | contact
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const waBase = useMemo(() => `https://wa.me/${WHATSAPP_NUMBER_E164}`, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "Submitting..." });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("type", mode);

    try {
      const res = await fetch("/api/lead", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Submission failed" );
      }

      setStatus({ state: "success", message: "Thanks! We received your details. We’ll contact you shortly." });

      // Open WhatsApp with a clean summary (docs can be sent in WhatsApp after submit)
      const name = formData.get("name") || "";
      const phone = formData.get("phone") || "";
      const vehicleType = formData.get("vehicleType") || "";
      const model = formData.get("model") || "";
      const year = formData.get("year") || "";
      const location = formData.get("location") || "";
      const msg = formData.get("message") || "";

      const lines = mode === "quote"
        ? [
            "Quote Request (Website)",
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Vehicle/Material: ${vehicleType}`,
            model ? `Model: ${model}` : null,
            year ? `Year: ${year}` : null,
            location ? `Location: ${location}` : null,
            msg ? `Notes: ${msg}` : null,
            "(If you uploaded a document on the website, please also share it here for faster processing.)",
          ]
        : [
            "Contact Request (Website)",
            `Name: ${name}`,
            `Phone: ${phone}`,
            msg ? `Message: ${msg}` : null,
          ];

      const waText = lines.filter(Boolean).join("\n");
      window.open(`${waBase}?text=${encodeURIComponent(waText)}`, "_blank");

      form.reset();
    } catch (err) {
      setStatus({ state: "error", message: err?.message || "Something went wrong. Please try WhatsApp." });
    }
  }

  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>Get in touch</h2>
              <p>
                For the fastest response, use WhatsApp. For a quote, share vehicle details and upload RC/ID documents (optional).
              </p>

              <div className="tekup-contact-info-wrap wrap2">
                <div className="tekup-contact-info mb-0">
                  <i className="ri-map-pin-2-fill" />
                  <h5>Service Area</h5>
                  <p>Karnataka, India</p>
                </div>

                <div className="tekup-contact-info mb-0">
                  <i className="ri-phone-fill" />
                  <h5>Contact</h5>
                  <Link href={`tel:+${WHATSAPP_NUMBER_E164}`}>+91 99454 19001</Link>
                  <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
                      "Hi Phoenix Recycling, I want to scrap my vehicle / sell industrial scrap."
                    )}`}
                    target="_blank"
                  >
                    WhatsApp Chat
                  </Link>
                </div>
              </div>

              <div className="tekup-extra-mt">
                <div className="d-flex gap-2 flex-wrap">
                  <button
                    type="button"
                    className={`tekup-default-btn ${mode === "quote" ? "" : "tekup-white-btn"}`}
                    onClick={() => setMode("quote")}
                  >
                    Get Quote
                  </button>
                  <button
                    type="button"
                    className={`tekup-default-btn ${mode === "contact" ? "" : "tekup-white-btn"}`}
                    onClick={() => setMode("contact")}
                  >
                    General Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="tekup-main-form" id="quote">
              <h3>{mode === "quote" ? "Request a Quote" : "Send a Message"}</h3>
              <p>We’ll respond quickly. No spam.</p>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input name="name" type="text" placeholder="Your name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input name="phone" type="tel" placeholder="Phone number" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <input name="email" type="email" placeholder="Email (optional)" />
                    </div>
                  </div>

                  {mode === "quote" && (
                    <>
                      <div className="col-lg-6">
                        <div className="tekup-main-field">
                          <select name="vehicleType" required defaultValue="">
                            <option value="" disabled>
                              Select type
                            </option>
                            <option value="2-Wheeler">2-Wheeler</option>
                            <option value="4-Wheeler (Car)">4-Wheeler (Car)</option>
                            <option value="Heavy Vehicle (Truck/Bus)">Heavy Vehicle (Truck/Bus)</option>
                            <option value="Machinery/Plant">Machinery/Plant</option>
                            <option value="Industrial Scrap Metal (B2B)">Industrial Scrap Metal (B2B)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tekup-main-field">
                          <input name="location" type="text" placeholder="Location (City / Area)" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tekup-main-field">
                          <input name="model" type="text" placeholder="Vehicle model (optional)" />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="tekup-main-field">
                          <input name="year" type="number" placeholder="Year" min="1900" max="2100" />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="tekup-main-field">
                          <select name="registrationType" defaultValue="">
                            <option value="" disabled>
                              Reg type
                            </option>
                            <option value="Private">Private</option>
                            <option value="Commercial">Commercial</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="tekup-main-field">
                          <label style={{ display: "block", marginBottom: 6 }}>
                            Upload RC/ID (optional)
                          </label>
                          <input name="document" type="file" accept="image/*,application/pdf" />
                          <small style={{ display: "block", opacity: 0.8, marginTop: 6 }}>
                            Note: For fastest processing, also share documents on WhatsApp after submitting.
                          </small>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <textarea
                        name="message"
                        placeholder={mode === "quote" ? "Any notes (condition, quantity, pickup details)..." : "Write your message..."}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button id="tekup-main-form-btn" type="submit" disabled={status.state === "loading"}>
                      {status.state === "loading" ? "Submitting..." : "Send"} <i className="ri-arrow-right-up-line" />
                    </button>

                    {status.state !== "idle" && (
                      <p
                        style={{
                          marginTop: 12,
                          color: status.state === "error" ? "#C35423" : "inherit",
                        }}
                      >
                        {status.message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
