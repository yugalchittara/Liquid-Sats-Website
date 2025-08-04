import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const HowItWorksSection = (): JSX.Element => {
  // Data for the steps
  const steps = [
    {
      number: "01",
      title: "Post a Loan Request",
      description: "Choose your BTC collateral and desired loan amount.",
      icon: "/figmaAssets/component-1-4.svg",
    },
    {
      number: "02",
      title: "Receive Lender Offers",
      description: "Lenders approve and sign offers. You select one.",
      icon: "/figmaAssets/component-1-12.svg",
    },
    {
      number: "03",
      title: "Lock BTC, Trigger Loan",
      description: "BTC is script-locked, and USDT is transferred.",
      icon: "/figmaAssets/component-1-8.svg",
    },
    {
      number: "04",
      title: "Manage the Loan",
      description: "Pay interest, redeem, or reclaim funds on fallback.",
      icon: "/figmaAssets/component-1-10.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center py-[70px] px-6 md:px-[175px] w-full bg-wwwfigmacomwhite">
      <div className="flex flex-col max-w-[1120px] items-center gap-14 w-full">
        <div className="flex flex-col items-center gap-3.5 relative self-stretch w-full">
          <div className="flex flex-col items-center relative self-stretch w-full">
            <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
              How <span className="text-wwwfigmacomorange-primary">It Works</span>
            </h2>
          </div>

          <div className="max-w-[588px] w-full">
            <p className="font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px]">
              Get liquidity from your Bitcoin in four simple steps while
              maintaining complete control of your assets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border border-solid bg-wwwfigmacomwhite rounded-[12.75px] overflow-hidden"
              data-testid={`card-step-${index}`}
            >
              {/* Corner step number */}
              <div className="absolute top-4 left-4 flex w-8 h-8 items-center justify-center bg-wwwfigmacomorange-primary rounded-full">
                <div className="font-bold text-wwwfigmacomwhite text-xs">
                  {step.number}
                </div>
              </div>

              <CardContent className="p-[22px] pt-16 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex w-16 h-16 items-center justify-center bg-wwwfigmacomorange-light rounded-full">
                    <img
                      className="w-8 h-8"
                      alt={`Step ${step.number} icon`}
                      src={step.icon}
                      data-testid={`img-step-icon-${index}`}
                    />
                  </div>

                  <h3 
                    className="font-bold text-wwwfigmacomebony text-base leading-[24px]"
                    data-testid={`text-step-title-${index}`}
                  >
                    {step.title}
                  </h3>

                  <p 
                    className="font-normal text-wwwfigmacomriver-bed text-sm leading-[20px]"
                    data-testid={`text-step-description-${index}`}
                  >
                    {step.description}
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
