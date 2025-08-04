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
    <header className="w-full flex flex-col items-start pt-3.5 pb-[15px] px-6 md:px-12 lg:px-[196px] bg-wwwfigmacomwhite border-b">
      <div className="flex items-center justify-between w-full">
        {/* Logo section */}
        <div className="flex items-center">
          <div className="flex flex-col w-[35px] h-7 items-start pr-[7px]">
            <div className="flex w-7 h-7 items-center justify-center bg-wwwfigmacomblue-ribbon rounded-[8.75px]">
              <div className="font-bold text-wwwfigmacomwhite text-sm">L</div>
            </div>
          </div>

          <div>
            <div className="font-www-figma-com-inter-bold font-[number:var(--www-figma-com-inter-bold-font-weight)] text-wwwfigmacomebony text-[length:var(--www-figma-com-inter-bold-font-size)] tracking-[var(--www-figma-com-inter-bold-letter-spacing)] leading-[var(--www-figma-com-inter-bold-line-height)] whitespace-nowrap [font-style:var(--www-figma-com-inter-bold-font-style)]">
              LiquidSat
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start pl-0 pr-7 py-0"
            >
              <a
                className="[font-family:'Inter',Helvetica] font-normal text-wwwfigmacomriver-bed text-sm tracking-[0] leading-[21px] whitespace-nowrap"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Button className="h-[31.5px] px-3.5 py-[7px] bg-wwwfigmacomblue-ribbon rounded-[6.75px]">
          <span className="mt-[-1.25px] font-www-figma-com-semantic-button font-[number:var(--www-figma-com-semantic-button-font-weight)] text-wwwfigmacomwhite text-[length:var(--www-figma-com-semantic-button-font-size)] text-center tracking-[var(--www-figma-com-semantic-button-letter-spacing)] leading-[var(--www-figma-com-semantic-button-line-height)] whitespace-nowrap [font-style:var(--www-figma-com-semantic-button-font-style)]">
            Go to App
          </span>
        </Button>
      </div>
    </header>
  );
};
