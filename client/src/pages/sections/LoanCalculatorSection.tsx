import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const LoanCalculatorSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How do I lock my BTC?",
      answer: "",
    },
    {
      question: "What happens if I cancel a loan?",
      answer: "",
    },
    {
      question: "Can I repay early?",
      answer: "",
    },
    {
      question: "Is this self-custodial?",
      answer: "",
    },
    {
      question: "What happens if I default?",
      answer: "",
    },
  ];

  return (
    <section className="py-[70px] bg-[#f8fafb] flex justify-center w-full">
      <div className="flex flex-col max-w-[784px] items-start gap-14 px-[21px] w-full">
        <div className="flex flex-col items-start gap-3.5 w-full">
          <div className="flex flex-col items-center w-full">
            <h2 className="w-full mt-[-1.00px] font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col items-center w-full">
            <p className="w-full mt-[-1.00px] font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px]">
              Get answers to common questions about Bitcoin-backed lending with
              LiquidSat.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="mb-3.5 last:mb-0 border border-solid rounded-[12.75px] bg-wwwfigmacomwhite overflow-hidden"
            >
              <AccordionTrigger className="px-[22px] py-3.5 font-www-figma-com-semantic-button text-wwwfigmacomebony text-[length:var(--www-figma-com-semantic-button-font-size)] leading-[var(--www-figma-com-semantic-button-line-height)] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-[22px] pb-3.5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
