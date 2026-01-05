import Header from "~/components/Section/Common/Header/Header";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";

const ProcessPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="How It Works" />
      <WorkProcessSection />

      <div className="section tekup-section-padding2 bg-light1">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="tekup-default-content">
                <h2>What to keep ready</h2>
                <ul>
                  <li>Basic vehicle details (type, model, year, location)</li>
                  <li>RC copy and ID proof (upload on website or share on WhatsApp)</li>
                  <li>Any notes about condition, missing parts, or access/pickup constraints</li>
                </ul>
                <p style={{ marginTop: 12 }}>
                  Pickup is available based on distance and feasibility. We will confirm everything before you proceed.
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

export default ProcessPage;
