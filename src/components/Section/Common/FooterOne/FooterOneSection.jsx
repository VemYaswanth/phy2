/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import BrandLogo from "~/components/Ui/BrandLogo/BrandLogo";

const WHATSAPP_NUMBER_E164 = "919945419001";

const FooterOneSection = ({ className }) => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
    "Hi Phoenix Recycling, I want to know the scrap value quote."
  )}`;

  return (
    <footer className={className}>
      <div className="container">
        <div className="tekup-footer-top extra-padding">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="tekup-footer-textarea light-color">
                <Link href="/">
                  <BrandLogo />
                </Link>
                <p>
                  Phoenix Recycling Pvt Ltd helps individuals and businesses in Karnataka with vehicle scrapping, machinery dismantling, and industrial scrap metal trading.
                </p>
                <div className="tekup-footer-info">
                  <ul>
                    <li>
                      <Link href={`tel:+${WHATSAPP_NUMBER_E164}`}>
                        <i className="ri-phone-fill" /> +91 99454 19001
                      </Link>
                    </li>
                    <li>
                      <Link href={waLink} target="_blank">
                        <i className="ri-whatsapp-fill" /> WhatsApp
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 offset-xl-1 col-md-4">
              <div className="tekup-footer-menu light-color">
                <div className="tekup-footer-title light-color">
                  <h5>Quick Links</h5>
                </div>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/service">Services</Link></li>
                  <li><Link href="/process">Process</Link></li>
                  <li><Link href="/compliance">Compliance</Link></li>
                  <li><Link href="/contact-us">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-md-4">
              <div className="tekup-footer-menu light-color extar-margin">
                <div className="tekup-footer-title light-color">
                  <h5>Services</h5>
                </div>
                <ul>
                  <li><Link href="/service">2-Wheeler Scrapping</Link></li>
                  <li><Link href="/service">Car Scrapping</Link></li>
                  <li><Link href="/service">Heavy Vehicles</Link></li>
                  <li><Link href="/service">Machinery Dismantling</Link></li>
                  <li><Link href="/service">B2B Scrap Trading</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-4">
              <div className="tekup-footer-menu light-color mb-0">
                <div className="tekup-footer-title light-color">
                  <h5>Information</h5>
                </div>
                <ul>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/process">How it works</Link></li>
                  <li><Link href="/compliance">Vehicle Scrappage Policy</Link></li>
                  <li><Link href="/contact-us">Get Quote</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="tekup-footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="tekup-copywright light-color right">
                <p>© {new Date().getFullYear()} Phoenix Recycling Pvt Ltd. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tekup-copywright light-color" style={{ textAlign: "right" }}>
                <p>Service Area: Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOneSection;
