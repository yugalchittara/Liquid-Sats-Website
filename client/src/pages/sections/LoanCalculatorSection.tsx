import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export const LoanCalculatorSection = (): JSX.Element => {
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
    <section className="px-6 py-[70px] bg-[#f8fafb] flex flex-col items-center w-full md:px-[175px]">
      <div className="flex flex-col items-center gap-14 w-full max-w-[1120px]">
        <header className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
            Try Our Loan Calculator
          </h2>
          <p className="font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px] max-w-[588px]">
            Enter your loan info and see your LiquidSat loan terms
          </p>
        </header>

        <Card className="w-full max-w-[1008px] border border-solid shadow-sm bg-wwwfigmacomwhite rounded-[12.75px]">
          <CardContent className="pt-7 pb-[50px] px-7">
            <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-8 xl:gap-10">
              <div className="flex flex-col items-start gap-5 flex-1 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <label className="font-medium text-wwwfigmacomcod-gray text-sm">
                    How much do you want to borrow?
                  </label>
                  <div className="relative w-full">
                    <div className="absolute top-2.5 left-2.5 text-wwwfigmacompale-sky text-sm">
                      $
                    </div>
                    <Input
                      className="pl-[29px] h-[42px] bg-wwwfigmacomathens-gray rounded-[6.75px] font-normal text-wwwfigmacomcod-gray"
                      defaultValue="2000"
                      data-testid="input-loan-amount"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <label className="font-medium text-wwwfigmacomcod-gray text-sm">
                    Choose your term length
                  </label>
                  <Select defaultValue="1month">
                    <SelectTrigger 
                      className="h-[31.5px] bg-wwwfigmacomathens-gray rounded-[6.75px] font-normal text-wwwfigmacomcod-gray text-[15.1px]"
                      data-testid="select-term-length"
                    >
                      <SelectValue placeholder="1 Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1month">1 Month</SelectItem>
                      <SelectItem value="3months">3 Months</SelectItem>
                      <SelectItem value="6months">6 Months</SelectItem>
                      <SelectItem value="12months">12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 flex-1 w-full">
                {calculatorResults.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex flex-col h-[52px]" data-testid={`result-${index}`}>
                    <div className="font-bold text-wwwfigmacomebony text-[26px] leading-[31.5px]">
                      {item.value}
                    </div>
                    <div className="font-normal text-wwwfigmacomriver-bed text-[13.7px] leading-[21px]">
                      {item.label}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col h-[52px] col-span-full sm:col-span-2" data-testid="result-payment">
                  <div className="font-bold text-wwwfigmacomebony text-[25.7px] leading-[31.5px]">
                    {calculatorResults[4].value}
                  </div>
                  <div className="font-normal text-wwwfigmacomriver-bed text-[13.7px] leading-[21px]">
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
