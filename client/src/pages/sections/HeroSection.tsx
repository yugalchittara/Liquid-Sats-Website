import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 w-full bg-gradient-to-br from-orange-25/30 via-wwwfigmacomwhite to-wwwfigmacomwhite">
      <div className="flex flex-col lg:flex-row max-w-7xl items-center justify-between gap-8 lg:gap-12 w-full">
        {/* Left content */}
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-wwwfigmacomebony text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Unlock Capital.{" "}
              <span className="text-wwwfigmacomblue-ribbon">
                Stay Bitcoin-True.
              </span>
            </h1>

            <p className="font-normal text-wwwfigmacomriver-bed text-base sm:text-lg leading-relaxed max-w-[480px]">
              Use your BTC without selling. Maintain self-custody while accessing on-chain liquidity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gradient-to-r from-wwwfigmacomorange-gradient-start to-wwwfigmacomorange-gradient-end hover:from-wwwfigmacomorange-primary hover:to-wwwfigmacomorange-gradient-end text-white px-6 py-3 rounded-lg font-medium"
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

        {/* Right content - Collateral Card */}
        <div className="flex-shrink-0 relative">
          {/* Enhanced gradient backdrop covering entire right area */}
          <div className="absolute -inset-8 bg-gradient-to-br from-orange-200/30 via-orange-100/25 via-orange-50/15 to-transparent rounded-[32px] blur-2xl"></div>
          <div className="absolute -inset-6 bg-gradient-to-br from-orange-100/40 via-orange-50/20 to-transparent rounded-[24px] blur-xl"></div>
          <div className="w-[320px] bg-white rounded-[16px] p-6 shadow-2xl border border-gray-100 relative z-10 backdrop-blur-sm">
            {/* Bitcoin Collateral Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-wwwfigmacomorange-primary rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M13.6 8.4C13.8 7.1 12.9 6.4 11.6 6L12.2 4.4L11.1 4.1L10.7 5.7C10.5 5.7 10.2 5.6 10 5.6L10.4 4L9.4 3.8L8.9 5.4C8.7 5.4 8.6 5.3 8.5 5.3L8.5 5.2L7.3 4.9L7 6C7 6 7.7 6.2 7.7 6.2C8 6.3 8.1 6.4 8.1 6.6L7.6 8.5C7.6 8.5 7.7 8.5 7.7 8.5L7.6 8.5L6.9 11.2C6.9 11.3 6.7 11.5 6.4 11.5C6.4 11.5 5.8 11.3 5.8 11.3L5.3 12.4L6.5 12.7L7.5 12.9L6.9 14.6L8 14.8L8.4 13.2C8.6 13.3 8.8 13.3 9.1 13.4L8.7 15L9.7 15.2L10 13.6C11.6 13.9 12.8 13.8 13.3 12.4C13.7 11.2 13.3 10.5 12.4 10.1C13 9.9 13.5 9.6 13.6 8.4ZM11.7 11.7C11.4 12.9 9.5 12.3 8.8 12.1L9.4 9.7C10.1 9.9 12 10.5 11.7 11.7ZM12 8.4C11.8 9.5 10.2 8.9 9.7 8.8L10.2 6.7C10.7 6.8 12.2 7.2 12 8.4Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Bitcoin Collateral</h3>
                <p className="text-gray-500 text-xs">Self-Custody</p>
              </div>
              <div className="ml-auto text-right">
                <div className="font-bold text-gray-900 text-lg">2.5 BTC</div>
                <div className="text-green-600 text-sm font-medium">+$125,000</div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Available to Borrow</span>
                <span className="font-bold text-gray-900 text-lg">$62,500</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">LTV Ratio</span>
                <span className="font-semibold text-gray-900">50%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">APR</span>
                <span className="font-semibold text-green-600">9.5%</span>
              </div>
            </div>

            {/* Access Liquidity Button */}
            <button className="w-full bg-gradient-to-r from-wwwfigmacomorange-gradient-start to-wwwfigmacomorange-gradient-end hover:from-wwwfigmacomorange-primary hover:to-wwwfigmacomorange-gradient-end text-white py-3 px-6 rounded-lg font-medium transition-all duration-200">
              Access Liquidity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};