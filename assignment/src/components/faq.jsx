//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "How many franchises per region?",
    answer:
      "• 1 State Master Franchise (ONLY ONE per state)\n• 3 District Master Franchises per district\n• 5 City Master Franchises\n• Limited Local Centers as per demand\n→ Ensures exclusivity, market dominance & high earnings.",
  },
  {
    question: "Is technical knowledge required?",
    answer:
      "NO. Our AI-powered system, training & onboarding cover everything. Anyone from education, business, NGO, corporate, government, or youth leadership background can join.",
  },
  {
    question: "How soon can I start earning?",
    answer:
      "From Day 1 after onboarding. You get ready clients via:\n✔ School lists\n✔ College databases\n✔ MSME leads\n✔ Institutional models\n✔ Skill training demand\n✔ AI-driven marketing\n✔ Automated WhatsApp funnel",
  },
  {
    question: "What is the monthly earning potential?",
    answer:
      "Depending on region:\n✔ Local Franchise: ₹25,000 – ₹2,00,000/month\n✔ City Franchise: ₹50,000 – ₹5,00,000/month\n✔ District Franchise: ₹1,00,000 – ₹30,00,000+/month\n✔ State Franchise: ₹5,00,000 – ₹1.2 Cr/month",
  },
  {
    question: "What is included in the 20X Value Offer?",
    answer:
      "• 10X Franchise Offer Value\n• 10X Bonus Stack\n• Total value: 20X of your fee\nIncludes: AI tools, automation systems, 2000+ assets, databases, course rights, leadership training, community, events & more.",
  },
  {
    question: "Is this government approved?",
    answer:
      "Nitai works aligned with national missions like:\n• India AI Mission\n• Digital India\n• Skill India\n• Viksit Bharat 2047\n• PMKVY-aligned training\n• MSME + Startup India ecosystem\nNot a government franchise, but aligned with national initiatives.",
  },
  {
    question: "Can I run this from home?",
    answer:
      "YES. With minimal space (room/co-working) you can build a massive AI franchise business.",
  },
  {
    question: "What support do I get?",
    answer:
      "You get:\n✓ AI-powered marketing\n✓ AI sales funnel\n✓ AI onboarding\n✓ AI operations system\n✓ 24×7 support\n✓ SOPs, frameworks, scripts, tools\n✓ Weekly leadership calls\n✓ Lifetime community",
  },
  {
    question: "What if I fail?",
    answer:
      "No one fails when:\n✔ System is ready\n✔ Market demand is massive\n✔ AI grows daily\n✔ Nitai gives 360° support\n✔ 120+ revenue streams\nSuccess becomes automatic.",
  },
  {
    question: "Is the ₹1200 seat booking refundable?",
    answer:
      "YES, 100% refundable if:\n• You are not selected\n• You change region\n• You upgrade/downgrade package",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="faq-section">
      {/* Floating background elements */}
      <div className="faq-floating-bg">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="faq-dot"
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 3, repeat: 999999, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="faq-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="faq-header"
        >
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about joining NITAI
          </p>
        </motion.div>

        {/* Custom Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              
              {/* Clickable question */}
              <div
                className={`faq-question ${
                  openIndex === index ? "open" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </div>

              {/* Answer */}
              <div
                className={`faq-answer ${
                  openIndex === index ? "show" : ""
                }`}
              >
                {faq.answer.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
