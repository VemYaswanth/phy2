import Header from "~/components/Section/Common/Header/Header";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import PageHeader from "~/components/Section/Common/PageHeader";

const CompliancePage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Compliance & Trust" />

      <div className="section tekup-section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="tekup-default-content">
                <h2>Government alignment</h2>
                <p>
                  Phoenix Recycling is a government-authorized Vehicle Scrapping / Recycling business (RVSF status currently in process). Our operations are designed around safe dismantling, responsible recycling, and proper documentation.
                </p>

                <h3 style={{ marginTop: 18 }}>What this means for you</h3>
                <ul>
                  <li>Transparent valuation and clear confirmation before pickup</li>
                  <li>Document guidance for smooth compliance</li>
                  <li>Eco-first dismantling and scrap handling</li>
                </ul>

                <h3 style={{ marginTop: 18 }}>Common questions</h3>
                <ul>
                  <li><strong>Do you pickup vehicles?</strong> Pickup depends on distance and feasibility.</li>
                  <li><strong>Do you provide refurbished parts?</strong> Currently not offered.</li>
                  <li><strong>What documents are needed?</strong> RC + ID proof is typically required. We’ll guide based on your case.</li>
                </ul>

                <p style={{ marginTop: 18 }}>
                  If you want the fastest response, message us on WhatsApp with your vehicle details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOneSection className="tekup-footer-section dark-bg" />
    </>
  );
};

export default CompliancePage;
