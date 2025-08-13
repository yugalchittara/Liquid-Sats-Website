import { GithubIcon, StarIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const FooterSection = (): JSX.Element => {
  // Footer links data
  const footerLinks = [
    {
      name: "FAQ",
      url: "#faq",
      icon: null,
    },
    {
      name: "Discord",
      url: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html",
      icon: <StarIcon className="w-3.5 h-3.5" />,
    },
    {
      name: "X",
      url: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html",
      icon: <TwitterIcon className="w-3.5 h-3.5" />,
    },
    {
      name: "Privacy Policy",
      url: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html",
      icon: null,
    },
  ];

  return (
    <footer className="w-full bg-wwwfigmacomebony py-12 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="flex flex-col items-center gap-8 sm:gap-10 w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full">
          {/* Logo and description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 footer-logo">
            <img 
              src="/liquidsat-logo.png" 
              alt="LiquidSat Logo"
              className="object-contain brightness-0 invert"
            />
          </div>
          <div className="max-w-md">
              <p className="font-normal text-wwwfigmacommischka text-sm leading-relaxed">
                Bitcoin-backed capital access. No custody. No compromise.
              </p>
            </div>
        </div>

          {/* Button and links */}
          <div className="flex flex-col items-start lg:items-end gap-6 flex-1">
            <Button 
              className="h-8 px-6 py-2 bg-wwwfigmacomblue-ribbon hover:bg-blue-700 rounded-[6.75px] text-wwwfigmacomwhite text-sm font-medium"
              data-testid="button-footer-go-to-app"
              onClick={() => window.open("https://liquidsat.danlabs.xyz/", "_blank")}
            >
              Go to App
            </Button>

            <div className="flex flex-wrap items-start justify-start lg:justify-end gap-4 sm:gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={`footer-link-${index}`}
                  href={link.url}
                  data-testid={`link-footer-${index}`}
                  className="flex items-center text-wwwfigmacommischka text-[12.3px] leading-[17.5px] hover:underline"
                >
                  {link.icon && <span className="mr-[3.5px]">{link.icon}</span>}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full pt-[29px] border-t border-[#1d2838]">
          <div className="text-center">
            <p className="text-wwwfigmacomgray-chateau text-[12.1px] leading-[17.5px]">
              © 2024 LiquidSat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};