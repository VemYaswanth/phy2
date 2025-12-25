'use client';
import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const openPopup = () => {
        setPopup(true);
        const iframe = document.getElementById("youtube-video");
        if (iframe) {
            iframe.src = "https://www.youtube.com/embed/Vx2aLNgGoAE?si=kJ-TpMHiayKaioda";
        }
        setIsActive(true);
        document.body.classList.add('disable-scroll');
    };
    const closePopup = () => {
        setPopup(false);
        const iframe = document.getElementById("youtube-video");
        if (iframe) {
            iframe.src = "";
        }
        setIsActive(false);
        document.body.classList.remove('disable-scroll');
    };
    return (
        <div className="tekup-hero-section4">
            <div className="container">
                <div className="tekup-hero-content white-color center">
                    <h1>We provide best tech solutions for your business</h1>
                    <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
                    <div className="tekup-extra-mt">
                        <div className="tekup-hero-btn-wrap center">
                            <Link className="tekup-default-btn" href="">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
                            <Link className="tekup-default-btn outline-btn-white" href="">Our Works <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="tekup-video-wrap extra-padding-top">
                    <img src="/images/v4/video-bg.png" alt="" />
                    <a className="tekup-video-popup video-init" onClick={openPopup}>
                        <img className="playBtn" src="/images/v4/play-btn.png" alt="" />
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                    </a>
                </div>
            </div>
            <div
                className={`popup-video ${popup ? "popup" : "popdown"}`}
                onClick={closePopup}
            >
                <div className={`video-wrapper ${isActive ? 'active' : ''}`}>
                    <iframe
                        id="youtube-video"
                        className="video"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Vx2aLNgGoAE?si=kJ-TpMHiayKaioda"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <button className="mfp-close" onClick={closePopup}>×
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;