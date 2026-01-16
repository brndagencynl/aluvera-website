'use client';

import { useState } from 'react';
import type { ProductFaq } from '@/data/products';

interface FaqAccordionProps {
  faqs: ProductFaq[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-slate-200 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-slate-900">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-4 text-slate-600 leading-relaxed">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
