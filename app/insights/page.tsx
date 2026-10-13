import React from "react";
import InsightsHero from "../../components/Insights/InsightsHero";
import InsightsFeatured from "../../components/Insights/InsightsFeatured";
import InsightsGrid from "../../components/Insights/InsightsGrid";
import InsightsBottomCTA from "../../components/Insights/InsightsBottomCTA";

export const metadata = {
  title: "Insights & News | MedHawk",
  description: "Latest thinking, news, and perspectives on human-centered solutions and medical device innovations from MedHawk.",
};

export default function InsightsPage() {
  return (
    <div className="bg-medhawk-dark min-h-screen text-white overflow-x-hidden -mt-[80px]">
      <InsightsHero />
      <InsightsFeatured />
      <InsightsGrid />
      <InsightsBottomCTA />
    </div>
  );
}
