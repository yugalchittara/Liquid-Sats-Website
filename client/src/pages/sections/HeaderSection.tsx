import React from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    {
      text: "How It Works",
      href: "#how-it-works",
    },
    {
      text: "Calculator",
      href: "#calculator",
    },
    {
      text: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-wwwfigmacomwhite border-b shadow-sm">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-12 lg:px-24 py-3">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          {/* LiquidSat logo image */}
          <img 
            src="/liquidsat-logo.png" 
            alt="LiquidSat Logo"
            className="h-8 w-auto object-contain"
            onLoad={(e) => {
              // Ensure fallback is hidden when image loads successfully
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'none';
            }}
            onError={(e) => {
              // Hide image and show text fallback on error
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          {/* Text fallback logo (hidden by default) */}
          <div className="hidden items-center gap-2" id="logo-fallback">
            <div className="w-7 h-7 flex items-center justify-center bg-wwwfigmacomorange-primary rounded-[8.75px]">
              <div className="font-bold text-wwwfigmacomwhite text-sm">L</div>
            </div>
            <div className="font-bold text-wwwfigmacomebony text-base">
              LiquidSat
            </div>
          </div>
        </div>

        {/* Navigation links - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="font-normal text-wwwfigmacomriver-bed text-sm hover:text-wwwfigmacomblue-ribbon transition-colors"
              href={link.href}
              data-testid={`nav-link-${index}`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button 
          className="h-8 px-4 py-2 bg-wwwfigmacomblue-ribbon hover:bg-blue-700 rounded-[6.75px] text-sm font-medium"
          data-testid="button-go-to-app"
          onClick={() => window.open("https://liquidsat.danlabs.xyz/", "_blank")}
        >
          Go to App
        </Button>
      </div>
    </header>
  );
};
