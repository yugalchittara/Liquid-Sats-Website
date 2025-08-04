
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      title: "Adjustable LTV",
      description: "50% initial LTV with user-controlled risk management. Adjust your leverage based on market conditions and risk tolerance.",
    },
    {
      title: "Competitive APR", 
      description: "Starting at just 9.5% APR. Rates are tiered by loan size and duration, ensuring you get the best possible terms.",
    },
    {
      title: "Flexible Terms",
      description: "Borrow from $1,000 with custom durations that fit your needs. No rigid repayment schedules or penalties.",
    },
    {
      title: "No Hidden Fees",
      description: "Zero origination fees and zero early repayment penalties. What you see is what you pay - complete transparency.",
    },
    {
      title: "Self-Custodial",
      description: "Your Bitcoin never leaves your control. Maintain true ownership while accessing liquidity through smart contracts.",
    },
    {
      title: "Anytime Access",
      description: "Get liquidity whenever you need it. No waiting periods, no approval processes - instant access to your funds.",
    },
  ];

  const getIcon = (index: number) => {
    const iconClass = "text-wwwfigmacomorange-primary";
    
    switch (index) {
      case 0:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M3 17H9V15H3V17ZM3 13H15V11H3V13ZM3 9H21V7H3V9ZM3 3V5H21V3H3Z" fill="currentColor"/>
          </svg>
        );
      case 1:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M7 14L12 9L17 14H7Z" fill="currentColor"/>
          </svg>
        );
      case 2:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        );
      case 3:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.5 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.5 11.8 10.9Z" fill="currentColor"/>
          </svg>
        );
      case 4:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11S10 10.1 10 9S10.9 7 12 7ZM12 17C10.34 17 8.91 16.16 8.17 14.89C8.58 13.12 11.97 12.5 12 12.5S15.42 13.12 15.83 14.89C15.09 16.16 13.66 17 12 17Z" fill="currentColor"/>
          </svg>
        );
      case 5:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
            <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.8 12.6C4.3 13.84 5.18 15.1 6.5 15.1H9V19C9 20.1 9.9 21 11 21H13C14.1 21 15 20.1 15 19V15.1H17.5C18.82 15.1 19.7 13.84 19.2 12.6L18 9.66C17.81 5.95 14.77 3 13 3ZM13 13.1H11V19H13V13.1Z" fill="currentColor"/>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {featureCards.map((card, index) => (
            <Card
              key={`feature-card-${index}`}
              className="border border-solid rounded-[12.75px] bg-wwwfigmacomwhite p-6"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex w-12 h-12 items-center justify-center bg-wwwfigmacomorange-light rounded-xl">
                    {getIcon(index)}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 
                      className="font-bold text-wwwfigmacomebony text-lg leading-[24px]"
                      data-testid={`text-feature-title-${index}`}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="font-normal text-wwwfigmacomriver-bed text-sm leading-[20px]"
                      data-testid={`text-feature-description-${index}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
