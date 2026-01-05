"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "~/components/Ui/BrandLogo/BrandLogo";

const WHATSAPP_NUMBER_E164 = "919945419001"; // +91 9945419001
const PHONE_DISPLAY = "+91 99454 19001";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollClassName, setScrollClassName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollClassName(window.scrollY > 100 ? "sticky-menu" : "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth > 991 && isMenuOpen) {
        setIsMenuOpen(false);
        document.querySelector(".menu-overlay")?.classList.remove("active");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    document.querySelector(".menu-overlay")?.classList.toggle("active");
  };

  return (
    <header
      className={`site-header tekup-header-section site-header--menu-right light-color ${scrollClassName}`}
    >
      {/* Top bar */}
      <div className="tekup-header-top bg-accent">
        <div className="container-fuild">
          <div className="tekup-header-info-wrap">
            <div className="tekup-header-info">
              <ul>
                <li>
                  <i className="ri-map-pin-2-fill" /> Karnataka, India
                </li>
              </ul>
            </div>
            <div className="tekup-header-info">
              <ul>
                <li>
                  <Link href={`tel:+${WHATSAPP_NUMBER_E164}`}>
                    <i className="ri-phone-fill" /> {PHONE_DISPLAY}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
                      "Hi Phoenix Recycling, I want to scrap my vehicle / sell industrial scrap."
                    )}`}
                    target="_blank"
                  >
                    <i className="ri-whatsapp-fill" /> WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-fuild">
        <div className="tekup-header-bottom border_bottom">
          <nav className="navbar site-navbar">
            <div className="brand-logo">
              <Link href="/">
                <BrandLogo />
              </Link>
            </div>

            <div className="menu-block-wrapper">
              <div className="menu-overlay" onClick={toggleMenu} />

              <nav className={`menu-block ${isMenuOpen ? "active" : ""}`} id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="current-menu-title">Menu</div>
                  <div className="mobile-menu-close" onClick={toggleMenu}>
                    &times;
                  </div>
                </div>

                <ul className="site-menu-main" onClick={() => setIsMenuOpen(false)}>
                  <li className="nav-item">
                    <Link href="/" className="nav-link-item">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service" className="nav-link-item">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/process" className="nav-link-item">
                      Process
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/compliance" className="nav-link-item">
                      Compliance
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact-us" className="nav-link-item">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
              <Link className="tekup-default-btn" href="/contact-us">
                Get Quote <i className="ri-arrow-right-up-line" />
              </Link>
            </div>

            <div className="mobile-menu-trigger" onClick={toggleMenu}>
              <span />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
