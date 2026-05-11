import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is ACELIE's primary mission?",
    answer: "ACELIE (African Centre for Ethical Leadership, Innovation and Entrepreneurship) is dedicated to transforming Africa through the cultivation of ethical leadership and character-driven innovation across institutions."
  },
  {
    question: "Where is the ACELIE hub located?",
    answer: "Our central hub is located in Kumbo, Bui Division, North-West Region of Cameroon. From here, we coordinate regional hubs and continental initiatives."
  },
  {
    question: "How can individuals or institutions join ACELIE?",
    answer: "Participation is open through various pathways: membership for individuals, institutional partnerships for schools and ministries, volunteer specialist roles, or as financial supporters."
  },
  {
    question: "What does it mean for ACELIE to be non-partisan?",
    answer: "ACELIE operates independently of any political party or ideology. Our focus is purely on the ethical formation of leaders who serve the common good of the continent, regardless of political affiliation."
  },
  {
    question: "What are the core pillars of ACELIE's curriculum?",
    answer: "Our curriculum focuses on character infrastructure, self-governance, service-oriented leadership, and the integration of ethical standards into STEM and entrepreneurship."
  },
  {
    question: "How does ACELIE support entrepreneurship?",
    answer: "We provide specialized development tracks that build sustainable business models grounded in character, accountability, and social responsibility, ensuring economic growth doesn't come at the cost of integrity."
  },
  {
    question: "Does ACELIE provide mentorship?",
    answer: "Yes, mentorship is a core component. We connect emerging leaders with established ethical specialists through our regional network hubs and learning labs."
  },
  {
    question: "What is the long-term continental roadmap?",
    answer: "Our strategic pillars include regional expansion across major economic zones by 2027, formal integration of ethical leadership standards into national curricula, and launching Africa's first data-driven character maturity index."
  }
];

interface GlideAccordionProps {
  align?: 'left' | 'center';
}

export default function GlideAccordion({ align = 'left' }: GlideAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`mx-auto max-w-4xl ${align === 'center' ? 'text-center' : ''}`}>
      <div className="divide-y divide-hairline border-t border-hairline">
        {faqs.map((faq, index) => (
          <div key={index} className="py-2">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-gold"
            >
              <span className="text-base font-bold tracking-tight text-navy">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="ml-4 shrink-0 text-gold"
              >
                <ChevronDown size={24} strokeWidth={1.5} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-base leading-relaxed text-charcoal/65">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
