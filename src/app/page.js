import HeroSection from "~/components/Section/Home-1/HeroSection";
import ItSolutionSection from "~/components/Section/Home-1/ItSolutionSection";
import RecentBlogSection from "~/components/Section/Home-1/RecentBlogSection";
import RecentProjectsSection from "~/components/Section/Home-1/RecentProjectsSection";
import TeamSection from "~/components/Section/Home-1/TeamSection";
import ServiceSlideSection from "~/components/Section/Home-1/ServiceSlideSection";
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";
import Header from '~/components/Section/Common/Header/Header';
import CtaTwoSection from "~/components/Section/Common/CtaTwo/CtaTwoSection";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSlideSection/>
      <ItSolutionSection />
      <RecentProjectsSection />
      <WorkProcessSection/>
      <TeamSection />
      <RecentBlogSection />
      <CtaTwoSection/>
      <FooterOneSection className="tekup-footer-section dark-bg extra-minus-margin"/>
    </div>
  );
}
