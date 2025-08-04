import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center py-[100px] px-6 md:px-[175px] w-full bg-wwwfigmacomwhite">
      <div className="flex flex-col lg:flex-row max-w-[1120px] items-center justify-between gap-12 w-full">
        {/* Left content */}
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-wwwfigmacomebony text-[48px] md:text-[56px] leading-[56px] md:leading-[64px]">
              Unlock Capital.{" "}
              <span className="text-wwwfigmacomblue-ribbon">
                Stay Bitcoin-True.
              </span>
            </h1>
            
            <p className="font-normal text-wwwfigmacomriver-bed text-lg leading-[28px] max-w-[480px]">
              Use your BTC without selling. Maintain self-custody while accessing on-chain liquidity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-wwwfigmacomblue-ribbon hover:bg-wwwfigmacomblue-ribbon/90 text-white px-6 py-3 rounded-lg font-medium"
              data-testid="button-go-to-app"
            >
              Go to App
            </Button>
            <Button 
              variant="outline" 
              className="border-wwwfigmacomriver-bed text-wwwfigmacomriver-bed hover:bg-wwwfigmacomriver-bed/10 px-6 py-3 rounded-lg font-medium"
              data-testid="button-how-it-works"
            >
              How It Works
            </Button>
          </div>
        </div>

        {/* Right content - Bitcoin icon */}
        <div className="flex-shrink-0">
          <div className="w-[280px] h-[280px] bg-wwwfigmacomblue-ribbon rounded-[24px] flex items-center justify-center">
            <svg 
              width="140" 
              height="140" 
              viewBox="0 0 140 140" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M95.2 58.8C96.6 49.7 90.3 44.8 81.4 42.1L84.4 30.8L77.9 29.2L75 40.2C73.4 39.8 71.7 39.4 70.1 39L73 28L66.5 26.4L63.5 37.7C62.2 37.4 60.9 37.1 59.7 36.8L59.7 36.7L50.8 34.4L49.1 41.4C49.1 41.4 53.8 42.5 53.7 42.6C56.3 43.2 56.8 45 56.7 46.4L53.3 59.2C53.5 59.3 53.8 59.4 54.1 59.6L53.3 59.4L48.6 78.3C48.2 79.3 47.2 80.8 45.1 80.3C45.2 80.4 40.5 79.2 40.5 79.2L37.3 86.8L45.7 89L52.2 90.6L49.1 102.1L55.6 103.7L58.6 92.4C60.3 92.9 61.9 93.3 63.5 93.7L60.5 105L67 106.6L70.1 95.1C81.5 97.3 89.9 96.5 93.4 86.5C96.2 78.4 93.2 73.7 87.1 70.8C91.6 69.8 94.9 67 95.2 58.8ZM82.1 81.9C80.1 90.4 66.5 85.9 61.9 84.7L66.1 68.2C70.7 69.4 84.2 72.8 82.1 81.9ZM84.1 58.6C82.3 66.3 71.4 62.6 67.6 61.6L71.4 46.6C75.2 47.6 86 50.4 84.1 58.6Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
