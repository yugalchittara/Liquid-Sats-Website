import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Data for security feature cards
  const securityFeatures = [
    {
      icon: "/figmaAssets/component-1-2.svg",
      title: "Security First",
      description:
        "Funds move only after approvals and BTC lock. Smart contracts are audited.",
    },
    {
      icon: "/figmaAssets/component-1-13.svg",
      title: "Built-in Failsafes",
      description: "Cancel or reclaim funds if loan steps aren't completed.",
    },
    {
      icon: "/figmaAssets/component-1-6.svg",
      title: "Bitcoin-Native Infra",
      description:
        "No wrapped assets or bridges. BTC locked natively using script-based escrow.",
    },
  ];

  return (
    <section className="px-[175px] py-[70px] bg-[#f8fafb] flex flex-col items-start relative w-full">
      <div className="flex flex-col max-w-[1120px] items-start gap-14 px-[21px] py-0 relative w-full">
        <div className="flex flex-col items-center gap-3.5 relative self-stretch w-full">
          <div className="flex flex-col items-center relative self-stretch w-full">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-wwwfigmacomebony text-[29.8px] text-center tracking-[0] leading-[35px]">
              Built for Trust &amp; Security
            </h2>
          </div>

          <div className="flex flex-col max-w-[588px] w-[588px] items-center relative">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center tracking-[0] leading-[24.5px]">
              Your Bitcoin security is our priority. Every aspect is designed
              with maximum
              <br />
              safety and transparency.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-7 relative self-stretch w-full">
          {securityFeatures.map((feature, index) => (
            <Card
              key={`security-feature-${index}`}
              className="flex flex-col items-start p-[29px] relative flex-1 self-stretch bg-wwwfigmacomwhite rounded-[12.75px] border border-solid"
            >
              <CardContent className="relative self-stretch w-full h-[178.5px] p-0">
                <div className="flex w-14 h-14 items-center justify-center absolute top-0 left-[113px] bg-wwwfigmacomfeta rounded-[16777200px]">
                  <img
                    className="relative w-7 h-7"
                    alt="Security feature icon"
                    src={feature.icon}
                  />
                </div>

                <div className="w-[283px] items-center absolute top-[77px] left-0 flex flex-col">
                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-wwwfigmacomebony text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                    {feature.title}
                  </h3>
                </div>

                <div className="flex flex-col w-[283px] items-center absolute top-28 left-0">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-wwwfigmacomriver-bed text-[13.6px] text-center tracking-[0] leading-[22.8px]">
                    {feature.description.includes("BTC") ? (
                      <>
                        {feature.description.split("BTC")[0]}BTC
                        <br />
                        {feature.description.split("BTC")[1]}
                      </>
                    ) : feature.description.includes("aren't") ? (
                      <>
                        {feature.description.split("aren't")[0]}aren&#39;t
                        <br />
                        {feature.description.split("aren't")[1]}
                      </>
                    ) : (
                      feature.description
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
