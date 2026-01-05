"use client";

import Link from "next/link";

const WHATSAPP_NUMBER_E164 = "919945419001";

const CtaTwoSection = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
    "Hi Phoenix Recycling, please share the scrap value quote."
  )}`;

  return (
    <div className="section z-index">
      <div className="container">
        <div
          className="tekup-cta-wrap"
          style={{ backgroundImage: "url(/images/v1/cta-bg.png)" }}
        >
          <div className="tekup-cta-content center">
            <h2>Get a quick quote on WhatsApp</h2>
            <p>
              Share your vehicle details (type, model, year) or scrap material info (type, approx quantity)
              and we’ll respond fast.
            </p>
            <div className="tekup-extra-mt d-flex gap-3 justify-content-center flex-wrap">
              <Link className="tekup-default-btn tekup-white-btn" href="/contact-us">
                Quote Form <i className="ri-arrow-right-up-line" />
              </Link>
              <Link className="tekup-default-btn tekup-white-btn" href={waLink} target="_blank">
                WhatsApp Now <i className="ri-whatsapp-line" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwoSection;
