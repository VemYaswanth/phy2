import Link from "next/link";


const CtaThreeSection = () => {
    return (
        <div className="tekup-cta-section tekup-section-padding" style={{backgroundImage:'url(/images/v4/cta-bg.png)'}}>
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-8">
          <div className="tekup-cta-content">
            <h2>Let’s work together </h2>
            <p>We are architects of innovation, trailblazers of advancement, and partners in your success. As a dynamic and forward</p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-4 d-flex align-items-center justify-content-end">
          <div className="tekup-cta-btn">
            <Link className="tekup-default-btn tekup-white-btn" href="contact-us.html">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default CtaThreeSection;