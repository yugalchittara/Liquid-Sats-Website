import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

export const FeaturesSection = (): JSX.Element => {
  // Loan calculator data
  const calculatorResults = [
    {
      value: "10.5%",
      label: "Annual Interest Rate",
    },
    {
      value: "$0.00",
      label: "Origination Fee",
    },
    {
      value: "$4,000",
      label: "Collateral Value",
    },
    {
      value: "50%",
      label: "LTV Ratio",
    },
    {
      value: "$2,017.5",
      label: "Payment at Maturity",
    },
  ];

  return (
    <section className="px-6 py-[70px] bg-[#f8fafb] flex flex-col items-center relative w-full md:px-[175px]">
      <div className="flex flex-col items-center gap-14 px-5 py-0 relative w-full max-w-[1120px]">
        <header className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px] w-full">
            Try Our Loan Calculator
          </h2>
          <p className="font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px] max-w-[588px]">
            Enter your loan info and see your LiquidSat loan terms
          </p>
        </header>

        <Card className="w-full max-w-[1008px] border border-solid border-[#0000001a] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-wwwfigmacomwhite rounded-[12.75px]">
          <CardContent className="pt-7 pb-[50px] px-7">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
              <div className="flex flex-col items-start gap-5 flex-1 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <label className="font-www-figma-com-semantic-label font-[number:var(--www-figma-com-semantic-label-font-weight)] text-wwwfigmacomcod-gray text-[length:var(--www-figma-com-semantic-label-font-size)] tracking-[var(--www-figma-com-semantic-label-letter-spacing)] leading-[var(--www-figma-com-semantic-label-line-height)]">
                    How much do you want to borrow?
                  </label>
                  <div className="relative w-full">
                    <div className="absolute top-2.5 left-2.5 text-wwwfigmacompale-sky text-sm">
                      $
                    </div>
                    <Input
                      className="pl-[29px] h-[42px] bg-wwwfigmacomathens-gray rounded-[6.75px] font-www-figma-com-semantic-input font-[number:var(--www-figma-com-semantic-input-font-weight)] text-wwwfigmacomcod-gray text-[length:var(--www-figma-com-semantic-input-font-size)]"
                      defaultValue="2000"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <label className="font-www-figma-com-semantic-label font-[number:var(--www-figma-com-semantic-label-font-weight)] text-wwwfigmacomcod-gray text-[length:var(--www-figma-com-semantic-label-font-size)] tracking-[var(--www-figma-com-semantic-label-letter-spacing)] leading-[var(--www-figma-com-semantic-label-line-height)]">
                    Choose your term length
                  </label>
                  <Select defaultValue="1month">
                    <SelectTrigger className="h-[31.5px] bg-wwwfigmacomathens-gray rounded-[6.75px] font-normal text-wwwfigmacomcod-gray text-[15.1px]">
                      <SelectValue placeholder="1 Month" />
                      <ChevronDownIcon className="h-3.5 w-3.5" />
                    </SelectTrigger>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5 flex-1">
                {calculatorResults.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex flex-col h-[52px]">
                    <div className="font-bold text-wwwfigmacomebony text-[26px] leading-[31.5px]">
                      {item.value}
                    </div>
                    <div className="font-normal text-wwwfigmacomriver-bed text-[13.7px] leading-[21px]">
                      {item.label}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col h-[52px] col-span-2">
                  <div className="font-bold text-wwwfigmacomebony text-[25.7px] leading-[31.5px]">
                    {calculatorResults[4].value}
                  </div>
                  <div className="font-www-figma-com-inter-regular font-[number:var(--www-figma-com-inter-regular-font-weight)] text-wwwfigmacomriver-bed text-[length:var(--www-figma-com-inter-regular-font-size)] tracking-[var(--www-figma-com-inter-regular-letter-spacing)] leading-[var(--www-figma-com-inter-regular-line-height)]">
                    {calculatorResults[4].label}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
