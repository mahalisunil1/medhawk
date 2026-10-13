import ServicesHero from "../../components/ServicesHero/ServicesHero";
import MedicalDeviceServices from "../../components/MedicalDeviceServices/MedicalDeviceServices";
import ServicesMarquee from "../../components/ServicesMarquee/ServicesMarquee";
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner";
import NewProductDevelopment from "../../components/NewProductDevelopment/NewProductDevelopment";
import ServicesMarqueeTwo from "../../components/ServicesMarqueeTwo/ServicesMarqueeTwo";
import ProductEnhancement from "../../components/ProductEnhancement/ProductEnhancement";
import QualityRiskManagement from "../../components/QualityRiskManagement/QualityRiskManagement";
import ManufacturingSupport from "../../components/ManufacturingSupport/ManufacturingSupport";
import ProjectConsultation from "../../components/ProjectConsultation/ProjectConsultation";

export const metadata = {
  title: "Services | MedHawk",
  description: "End-to-end medical device and product development services by MedHawk.",
};

export default function ServicesPage() {
  return (
    <div className="bg-medhawk-dark min-h-screen text-white overflow-x-hidden -mt-[80px]">
      <ServicesHero />
      <MedicalDeviceServices />
      <ServicesMarquee />
      <ServicesBanner />
      <NewProductDevelopment />
      <ServicesMarqueeTwo />
      <ProductEnhancement />
      <QualityRiskManagement />
      <ManufacturingSupport />
      <ProjectConsultation />
    </div>
  );
}
