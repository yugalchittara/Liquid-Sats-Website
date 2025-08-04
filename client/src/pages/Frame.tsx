import React from "react";
import { FAQSection } from "./sections/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { LiquidityOptionsSection } from "./sections/LiquidityOptionsSection";
import { LoanCalculatorSection } from "./sections/LoanCalculatorSection";
import { MainContentSection } from "./sections/MainContentSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[1470px]">
        {/* Header is fixed at the top */}
        <HeaderSection />

        {/* Main content sections stacked vertically */}
        <div className="w-full mt-[60px]">
          <HeroSection />
          <MainContentSection />
          <HowItWorksSection />
          <FeaturesSection />
          <LiquidityOptionsSection />
          <LoanCalculatorSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
