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
    <section className="flex flex-col items-start py-[70px] px-[175px] relative self-stretch w-full bg-wwwfigmacomwhite">
      <div className="flex flex-col max-w-[1120px] items-start gap-14 px-[21px] py-0 relative w-full">
        <div className="flex flex-col items-center gap-3.5 relative self-stretch w-full">
          <div className="flex flex-col items-center relative self-stretch w-full">
            <h2 className="relative self-stretch mt-[-1.00px] font-www-figma-com-semantic-heading-2 font-[number:var(--www-figma-com-semantic-heading-2-font-weight)] text-wwwfigmacomebony text-[length:var(--www-figma-com-semantic-heading-2-font-size)] text-center tracking-[var(--www-figma-com-semantic-heading-2-letter-spacing)] leading-[var(--www-figma-com-semantic-heading-2-line-height)] [font-style:var(--www-figma-com-semantic-heading-2-font-style)]">
              How It Works
            </h2>
          </div>

          <div className="flex flex-col max-w-[588px] w-[588px] items-center relative">
            <p className="relative w-fit mt-[-1.00px] font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center tracking-[0] leading-[24.5px] [font-family:'Inter',Helvetica]">
              Get liquidity from your Bitcoin in four simple steps while
              maintaining
              <br />
              complete control of your assets.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-7 relative self-stretch w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center relative flex-1 self-stretch grow"
            >
              <Card className="p-[22px] relative flex-1 self-stretch w-full grow border border-solid bg-wwwfigmacomwhite rounded-[12.75px]">
                <CardContent className="p-0 relative self-stretch w-full h-[217px]">
                  <div className="flex flex-col w-[204px] items-center gap-3.5 absolute top-0 left-0">
                    <div className="flex w-[42px] h-[42px] items-center justify-center relative bg-wwwfigmacomblue-ribbon rounded-[8.75px]">
                      <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-wwwfigmacomwhite text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                        {step.number}
                      </div>
                    </div>

                    <div className="flex w-[42px] h-[42px] items-center justify-center relative bg-wwwfigmacomzumthor rounded-[8.75px]">
                      <img
                        className="relative w-[21px] h-[21px]"
                        alt={`Step ${step.number} icon`}
                        src={step.icon}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-[204px] items-center absolute top-[119px] left-0">
                    <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-wwwfigmacomebony text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex flex-col w-[204px] items-center absolute top-[150px] left-0">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-wwwfigmacomriver-bed text-[13.6px] text-center tracking-[0] leading-[22.8px]">
                      {step.description.includes(" ") ? (
                        <>
                          {step.description
                            .split(" ")
                            .slice(0, step.description.split(" ").length / 2)
                            .join(" ")}
                          <br />
                          {step.description
                            .split(" ")
                            .slice(step.description.split(" ").length / 2)
                            .join(" ")}
                        </>
                      ) : (
                        step.description
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <Separator
                  className="absolute w-7 h-0.5 top-[130px] left-[234px] bg-wwwfigmacommischka"
                  orientation="horizontal"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
