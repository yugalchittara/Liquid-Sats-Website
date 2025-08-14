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
          <img 
            src="/liquidsat-logo.png" 
            alt="LiquidSat Logo"
            className="h-12 w-auto object-contain"
          />
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
          onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
        >
          Go to App
        </Button>
      </div>
    </header>
  );
};