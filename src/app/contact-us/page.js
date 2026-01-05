import Header from "~/components/Section/Common/Header/Header";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import ContactSection from "~/components/Section/Contact/ContactSection";
import MapSection from "~/components/Section/Contact/MapSection";

const ContactPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Contact & Get Quote" />
      <ContactSection />
      <MapSection />
      <FooterOneSection className="tekup-footer-section dark-bg" />
    </>
  );
};

export default ContactPage;
