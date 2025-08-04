import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const LiquidityOptionsSection = (): JSX.Element => {
  // Data for the liquidity option cards
  const liquidityOptions = [
    {
      icon: "/figmaAssets/component-1-18.svg",
      title: "Reinvest in BTC",
      description: [
        "Use liquidity to buy more",
        "Bitcoin and amplify your",
        "position while keeping your",
        "original holdings.",
      ],
    },
    {
      icon: "/figmaAssets/component-1-21.svg",
      title: "Fund Your Business",
      description: [
        "Access working capital for your",
        "business without liquidating",
        "your Bitcoin investments.",
      ],
    },
    {
      icon: "/figmaAssets/component-1-22.svg",
      title: "Cover Life Expenses",
      description: [
        "Handle unexpected expenses",
        "or major purchases while",
        "keeping your Bitcoin for the",
        "long term.",
      ],
    },
    {
      icon: "/figmaAssets/component-1-24.svg",
      title: "Pay for Education",
      description: [
        "Invest in yourself or your",
        "family's education without",
        "sacrificing your Bitcoin",
        "holdings.",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center py-[70px] px-4 md:px-[175px] w-full bg-wwwfigmacomwhite">
      <div className="flex flex-col max-w-[1120px] items-start gap-14 w-full">
        <div className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
            What You Can Do With Your Liquidity
          </h2>

          <p className="max-w-[588px] font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px]">
            Unlock the potential of your Bitcoin without losing exposure to
            future price
            <br />
            appreciation.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-7 w-full">
          {liquidityOptions.map((option, index) => (
            <Card
              key={index}
              className="flex-1 border border-solid bg-wwwfigmacomwhite rounded-[12.75px]"
            >
              <CardContent className="p-[22px] h-56 relative">
                <div className="flex w-14 h-14 items-center justify-center absolute top-0 left-[74px] bg-wwwfigmacomserenade rounded-[16777200px]">
                  <img
                    className="w-7 h-7"
                    alt={`${option.title} icon`}
                    src={option.icon}
                  />
                </div>

                <div className="flex flex-col w-[204px] items-center absolute top-[77px] left-0">
                  <h3 className="font-bold text-wwwfigmacomebony text-sm text-center leading-[21px] whitespace-nowrap">
                    {option.title}
                  </h3>
                </div>

                <div className="flex flex-col w-[204px] items-center absolute top-28 left-0">
                  <p className="font-normal text-wwwfigmacomriver-bed text-[13.6px] text-center leading-[22.8px]">
                    {option.description.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < option.description.length - 1 && <br />}
                      </span>
                    ))}
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
