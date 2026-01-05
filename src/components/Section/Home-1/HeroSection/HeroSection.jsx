import Link from "next/link";

const WHATSAPP_NUMBER_E164 = "919945419001";

export default function HeroSection() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
    "Hi Phoenix Recycling, I want to scrap my vehicle / sell industrial scrap."
  )}`;

  return (
    <div
      className="tekup-hero-section"
      style={{ backgroundImage: "url(/images/hero/hero-bg1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="tekup-hero-content white-color">
              <h1>Authorized Vehicle Scrapping & Industrial Scrap Trading</h1>
              <p>
                Get fair scrap value with a compliant, transparent process. We handle 2-wheelers,
                cars, heavy vehicles, machinery dismantling, and B2B scrap metal trading across Karnataka.
              </p>
              <div className="tekup-extra-mt d-flex gap-3 flex-wrap">
                <Link className="tekup-default-btn" href="/contact-us">
                  Get Quote <i className="ri-arrow-right-up-line"></i>
                </Link>
                <Link className="tekup-default-btn" href={waLink} target="_blank">
                  WhatsApp Now <i className="ri-whatsapp-line"></i>
                </Link>
              </div>
              <div className="tekup-extra-mt" style={{ opacity: 0.9 }}>
                <ul className="d-flex flex-wrap gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li><i className="ri-leaf-fill"></i> Eco-first dismantling</li>
                  <li><i className="ri-shield-check-fill"></i> Compliance focused (RVSF in process)</li>
                  <li><i className="ri-truck-fill"></i> Pickup depends on distance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-flex align-items-end justify-content-end">
            <div className="tekup-hero-rating" style={{ maxWidth: 360 }}>
              <img className="tekup-hero-author" src="/images/v1/author.png" alt="" />
              <p>
                Fast response on WhatsApp. Share your vehicle details and documents to get a quote.
              </p>
              <ul>
                <li><i className="ri-shield-check-fill"></i></li>
                <li><i className="ri-file-list-3-fill"></i></li>
                <li><i className="ri-recycle-fill"></i></li>
                <li><i className="ri-building-2-fill"></i></li>
                <li><i className="ri-road-map-fill"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
