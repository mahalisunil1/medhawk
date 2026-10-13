import React from "react";
import AboutHero from "../../components/AboutHero/AboutHero";
import AboutContent from "../../components/AboutContent/AboutContent";
import AboutExpertise from "../../components/AboutExpertise/AboutExpertise";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import AboutCulture from "../../components/AboutCulture/AboutCulture";
import AboutTogether from "../../components/AboutTogether/AboutTogether";
import AboutCTA from "../../components/AboutCTA/AboutCTA";

export const metadata = {
  title: "About Us | MedHawk",
  description: "Learn about MedHawk's culture, multidisciplinary team, and mission to shape innovations that build our future.",
};

export default function AboutPage() {
  return (
    <div className="bg-medhawk-dark min-h-screen text-white overflow-x-hidden -mt-[80px]">
      <AboutHero />
      <AboutContent />
      <AboutExpertise />
      <AboutTeam />
      <AboutCulture />
      <AboutTogether />
      <AboutCTA />
    </div>
  );
}
