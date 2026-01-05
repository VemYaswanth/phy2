"use client";

import Link from "next/link";

const steps = [
  {
    no: "01",
    title: "Share Details",
    desc: "Send vehicle/material details on WhatsApp or the quote form (type, model, year, location).",
    icon: "/images/iconbox/icon5.png",
  },
  {
    no: "02",
    title: "Inspection & Valuation",
    desc: "We review condition and compute a fair scrap value. Pickup depends on distance.",
    icon: "/images/iconbox/icon6.png",
  },
  {
    no: "03",
    title: "Payment",
    desc: "Once agreed, we confirm pickup/hand-over and proceed with payment as per the finalized quote.",
    icon: "/images/iconbox/icon7.png",
  },
  {
    no: "04",
    title: "Compliance & Certificate",
    desc: "We guide you through required documents and compliance steps (RVSF process if applicable).",
    icon: "/images/iconbox/icon12.png",
  },
];

const WorkProcessSection = () => {
  return (
    <div className="section tekup-section-padding2">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>How it works</h2>
        </div>

        <div
          className="tekup-iconbox-line"
          style={{ backgroundImage: "url(/images/v1/line.png)" }}
        >
          <div className="row">
            {steps.map((s) => (
              <div key={s.no} className="col-lg-3 col-md-6">
                <div className="tekup-iconbox-wrap2">
                  <div className="tekup-iconbox-icon2">
                    <img src={s.icon} alt="" />
                    <div className="tekup-iconbox-count">{s.no}</div>
                  </div>
                  <div className="tekup-iconbox-data2">
                    <Link href="/process">
                      <h5>{s.title}</h5>
                    </Link>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessSection;
