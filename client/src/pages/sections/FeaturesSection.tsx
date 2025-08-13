import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      title: "50% Initial Max LTV",
      description: "Lower your risk at any time with customizable collateral ratios.",
    },
    {
      title: "Starting at 9.5% APR", 
      description: "Tiered rates based on loan size and duration.",
    },
    {
      title: "Borrow any amount on Your Terms",
      description: "As low as $1000. Configure duration, and raise loan request.",
    },
    {
      title: "Transparent Pricing",
      description: "0% origination or early repayment fees. Only pay interest.",
    },
  ];

  const getIcon = (index: number) => {
    const iconClass = "text-wwwfigmacomorange-primary";

    switch (index) {
      case 0:
        // Graph/Security icon for Adjustable LTV
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M3 17H9V15H3V17ZM3 13H15V11H3V13ZM3 9H21V7H3V9ZM3 3V5H21V3H3Z" fill="currentColor"/>
          </svg>
        );
      case 1:
        // Percent icon for Competitive APR
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11S11 9.43 11 7.5S9.43 4 7.5 4ZM7.5 9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9ZM16.5 13C14.57 13 13 14.57 13 16.5S14.57 20 16.5 20S20 18.43 20 16.5S18.43 13 16.5 13ZM16.5 18C15.67 18 15 17.33 15 16.5S15.67 15 16.5 15S18 15.67 18 16.5S17.33 18 16.5 18ZM5.41 20L4 18.59L18.59 4L20 5.41L5.41 20Z" fill="currentColor"/>
          </svg>
        );
      case 2:
        // Slider icon for Flexible Terms
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M7 14L12 9L17 14H7ZM2 12C2 11.45 2.45 11 3 11H5C5.55 11 6 11.45 6 12S5.55 13 5 13H3C2.45 13 2 12.55 2 12ZM18 11H21C21.55 11 22 11.45 22 12S21.55 13 21 13H18C17.45 13 17 12.55 17 12S17.45 11 18 11Z" fill="currentColor"/>
          </svg>
        );
      case 3:
        // Dollar/Receipt icon for No Hidden Fees
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.5 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.5 11.8 10.9Z" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col items-center py-[70px] px-6 md:px-[175px] w-full bg-wwwfigmacomwhite">
      <div className="flex flex-col max-w-[1120px] items-center gap-14 w-full">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-3xl text-center leading-[35px]">
            Why Choose <span className="text-wwwfigmacomorange-primary">LiquidSat</span>
          </h2>

          <p className="max-w-[588px] font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px]">
            The most advanced Bitcoin liquidity protocol designed for the modern Bitcoin holder
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          {featureCards.map((card, index) => (
            <Card
              key={`feature-card-${index}`}
              className="border border-solid rounded-[12.75px] bg-wwwfigmacomwhite p-6"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex w-12 h-12 items-center justify-center bg-wwwfigmacomorange-light rounded-xl flex-shrink-0">
                      {getIcon(index)}
                    </div>
                    <h3 
                      className="font-bold text-wwwfigmacomebony text-lg leading-[24px]"
                      data-testid={`text-feature-title-${index}`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p 
                    className="font-normal text-wwwfigmacomriver-bed text-sm leading-[20px]"
                    data-testid={`text-feature-description-${index}`}
                  >
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};