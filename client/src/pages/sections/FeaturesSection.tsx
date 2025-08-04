import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      icon: "/figmaAssets/component-1-14.svg",
      title: "50% Initial Max LTV",
      description:
        "Lower your risk at any time with customizable collateral ratios.",
    },
    {
      icon: "/figmaAssets/component-1-3.svg",
      title: "Starting at 9.5% APR",
      description: "Tiered rates based on loan size and duration.",
    },
    {
      icon: "/figmaAssets/component-1-17.svg",
      title: "Borrow any amount on Your Terms",
      description:
        "As low as $1000. Configure duration, and raise loan request.",
    },
    {
      icon: "/figmaAssets/component-1-19.svg",
      title: "Transparent Pricing",
      description: "0% origination or early repayment fees. Only pay interest.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-[70px] px-6 md:px-[175px] w-full bg-wwwfigmacomwhite">
      <div className="flex flex-col max-w-[1120px] items-center gap-14 w-full">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-3xl text-center leading-[35px]">
            Why Choose LiquidSat
          </h2>

          <p className="max-w-[588px] font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px]">
            Experience the freedom of Bitcoin-backed lending with
            industry-leading
            <br />
            terms and complete transparency.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {featureCards.map((card, index) => (
            <Card
              key={`feature-card-${index}`}
              className="border border-solid rounded-[12.75px] bg-wwwfigmacomwhite"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="pt-[22px] pb-[43px] px-[22px]">
                <div className="flex items-start">
                  <div className="mr-3.5">
                    <div className="flex w-[42px] h-[42px] items-center justify-center bg-wwwfigmacomzumthor rounded-[8.75px]">
                      <img
                        className="w-[21px] h-[21px]"
                        alt="Feature icon"
                        src={card.icon}
                        data-testid={`img-feature-icon-${index}`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <h3 
                      className="font-bold text-wwwfigmacomebony text-sm leading-[21px]"
                      data-testid={`text-feature-title-${index}`}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="font-normal text-wwwfigmacomriver-bed text-[13.6px] leading-[22.8px]"
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
