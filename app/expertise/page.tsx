import ExpertiseHero from "../../components/ExpertiseHero/ExpertiseHero";
import DesignExpertise from "../../components/DesignExpertise/DesignExpertise";
import EngineeringExpertise from "../../components/EngineeringExpertise/EngineeringExpertise";
import QualityAssuranceExpertise from "../../components/QualityAssuranceExpertise/QualityAssuranceExpertise";
import ExploreServices from "../../components/ExploreServices/ExploreServices";
import ExpertiseCTA from "../../components/ExpertiseCTA/ExpertiseCTA";

export const metadata = {
  title: "Expertise | MedHawk",
  description: "Product design, engineering, and quality assurance expertise by MedHawk.",
};

export default function ExpertisePage() {
  return (
    <div className="bg-medhawk-dark min-h-screen text-white overflow-x-hidden -mt-[80px]">
      <ExpertiseHero />
      <DesignExpertise />
      <EngineeringExpertise />
      <QualityAssuranceExpertise />
      <ExploreServices />
      <ExpertiseCTA />
    </div>
  );
}
