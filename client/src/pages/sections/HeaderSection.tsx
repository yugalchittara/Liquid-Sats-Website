import React from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    {
      text: "How It Works",
      href: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html#how-it-works",
    },
    {
      text: "Calculator",
      href: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html#calculator",
    },
    {
      text: "FAQ",
      href: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html#faq",
    },
    {
      text: "Docs",
      href: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-wwwfigmacomwhite border-b shadow-sm">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-12 lg:px-24 py-3">
        {/* Logo section */}
        <div className="flex items-center gap-2">
          <div className="flex w-7 h-7 items-center justify-center bg-wwwfigmacomblue-ribbon rounded-[8.75px]">
            <div className="font-bold text-wwwfigmacomwhite text-sm">L</div>
          </div>
          <div className="font-bold text-wwwfigmacomebony text-base">
            LiquidSat
          </div>
        </div>

        {/* Navigation links - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="font-normal text-wwwfigmacomriver-bed text-sm hover:text-wwwfigmacomblue-ribbon transition-colors"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
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
        >
          Go to App
        </Button>
      </div>
    </header>
  );
};
