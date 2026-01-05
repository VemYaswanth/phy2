import Header from "~/components/Section/Common/Header/Header";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import ServiceSection from "~/components/Section/Service/ServiceSection";
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";
import CtaTwoSection from "~/components/Section/Common/CtaTwo/CtaTwoSection";

const ServicePage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Services" />
      <ServiceSection />
      <WorkProcessSection />
      <CtaTwoSection />
      <FooterOneSection className="tekup-footer-section dark-bg" />
    </>
  );
};

export default ServicePage;
