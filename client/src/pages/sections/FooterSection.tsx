import { GithubIcon, StarIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const FooterSection = (): JSX.Element => {
  // Footer links data
  const footerLinks = [
    {
      name: "Docs",
      url: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html",
      icon: null,
    },
    {
      name: "GitHub",
      url: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html",
      icon: <GithubIcon className="w-3.5 h-3.5" />,
    },
    {
      name: "FAQ",
      url: "https://efb4b355-c372-41bc-b2af-2f030738d0c5-figmaiframepreview.figma.site/preview_page.html#faq",
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
    <footer className="w-full bg-wwwfigmacomebony py-14 px-6 md:px-[175px]">
      <div className="flex flex-col items-start gap-[42px] w-full max-w-[1120px] mx-auto px-[21px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[42px] w-full">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start gap-3.5 flex-1">
            <div className="flex items-center">
              <div className="w-[35px] h-7 mr-1">
                <div className="flex items-center justify-center w-7 h-7 bg-wwwfigmacomblue-ribbon rounded-[8.75px]">
                  <span className="font-www-figma-com-inter-bold font-bold text-wwwfigmacomwhite text-sm">
                    L
                  </span>
                </div>
              </div>
              <span className="font-www-figma-com-inter-bold font-bold text-wwwfigmacomwhite text-[17.08984375px]">
                LiquidSat
              </span>
            </div>
            <div className="max-w-[392px]">
              <p className="font-normal text-wwwfigmacommischka text-[13.7px] leading-[22.8px]">
                Bitcoin-backed capital access. No custody. No compromise.
              </p>
            </div>
          </div>

          {/* Button and links */}
          <div className="flex flex-col items-start md:items-end gap-7 flex-1">
            <Button className="h-[31.5px] px-7 py-[10.5px] bg-wwwfigmacomblue-ribbon rounded-[6.75px] text-wwwfigmacomwhite text-[12.3px] font-medium">
              Go to App
            </Button>

            <div className="flex flex-wrap items-start justify-end gap-[21px]">
              {footerLinks.map((link, index) => (
                <a
                  key={`footer-link-${index}`}
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
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
