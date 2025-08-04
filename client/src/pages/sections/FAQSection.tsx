import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const FAQSection = (): JSX.Element => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-48 bg-gradient-to-b from-[rgba(249,250,251,1)] to-[rgba(255,255,255,1)] w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 w-full">
        <div className="flex flex-col items-start gap-7 flex-1">
          <div className="flex flex-col items-start gap-3 w-full">
            <h1 className="self-stretch font-['Inter',Helvetica] text-4xl leading-[52.5px] tracking-tight">
              <span className="font-bold text-[#101727]">Unlock Capital. </span>
              <span className="font-bold text-wwwfigmacomblue-ribbon">
                Stay
                <br />
                Bitcoin-True.
              </span>
            </h1>

            <p className="self-stretch font-['Inter',Helvetica] text-wwwfigmacomriver-bed text-base leading-7">
              Use your BTC without selling. Maintain self-custody while
              accessing on-chain liquidity.
            </p>
          </div>

          <div className="flex items-center gap-3.5 w-full">
            <Button className="h-[35px] px-3.5 py-[10.5px] bg-wwwfigmacomblue-ribbon rounded-[6.75px] text-wwwfigmacomwhite">
              <span className="font-www-figma-com-semantic-button text-[12.3px] leading-[17.5px]">
                Go to App
              </span>
              <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
            </Button>

            <Button
              variant="ghost"
              className="h-[35px] px-7 py-[10.5px] rounded-[6.75px]"
            >
              <span className="font-www-figma-com-semantic-button text-[12.3px] leading-[17.5px] text-wwwfigmacomriver-bed">
                How It Works
              </span>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-[410px]">
          <img
            className="w-[303px] h-[294px] object-contain"
            alt="Bitcoin logo"
            src="/figmaAssets/hero-image-1.png"
          />
        </div>
      </div>
    </section>
  );
};
