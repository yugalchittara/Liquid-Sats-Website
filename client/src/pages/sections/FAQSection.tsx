import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How do I lock my BTC?",
      answer: "Your BTC is locked using secure, script-based escrow technology that ensures your funds remain safe while being used as collateral.",
    },
    {
      question: "What happens if I cancel a loan?",
      answer: "If you cancel a loan request before it's funded, there are no fees. After funding, you can repay early without penalties.",
    },
    {
      question: "Can I repay early?",
      answer: "Yes, you can repay your loan early at any time with no prepayment penalties.Currently, interest is charged for the full loan term, but we’re working on a feature to charge interest only for the period you use the funds.",
    },
    {
      question: "Is this self-custodial?",
      answer: "Yes, LiquidSat uses Bitcoin-native infrastructure with script-based escrow, so you maintain control over your Bitcoin throughout the process.",
    },
    {
      question: "What happens if I default?",
      answer: "If you're unable to repay, the collateral Bitcoin is transferred to the lender according to the loan terms. However, you have multiple options to avoid default.",
    },
  ];

  return (
    <section id="faq" className="py-[70px] bg-[#f8fafb] flex justify-center w-full">
      <div className="flex flex-col max-w-[784px] items-center gap-14 px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
            Frequently Asked Questions
          </h2>
          <p className="font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px] max-w-[588px]">
            Get answers to common questions about Bitcoin-backed lending with LiquidSat.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="mb-3.5 last:mb-0 border border-solid rounded-[12.75px] bg-wwwfigmacomwhite overflow-hidden"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger 
                className="px-[22px] py-3.5 font-medium text-wwwfigmacomebony text-sm leading-[17.5px] hover:no-underline text-left"
                data-testid={`trigger-faq-${index}`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent 
                className="px-[22px] pb-3.5 font-normal text-wwwfigmacomriver-bed text-[13.6px] leading-[22.8px]"
                data-testid={`content-faq-${index}`}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
