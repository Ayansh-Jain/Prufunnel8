// Bonus.jsx - Irresistible Offer + 20X Bonus Stack
import './bonus.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Dodecahedron, MeshDistortMaterial, Sparkles, OrbitControls, Octahedron } from "@react-three/drei";
import {
  Gift,
  Sparkles as SparklesIcon,
  Trophy,
  Crown,
  Zap,
  Star,
  Award,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const franchisePricing = [
  {
    level: "State Master Franchise",
    fee: "₹12,00,000",
    coreValue: "₹1,20,00,000",
    bonusValue: "₹1,20,00,000",
    totalValue: "₹2,40,00,000"
  },
  {
    level: "District Master Franchise",
    fee: "₹5,00,000",
    coreValue: "₹50,00,000",
    bonusValue: "₹50,00,000",
    totalValue: "₹1,00,00,000"
  },
  {
    level: "City Franchise",
    fee: "₹1,20,000",
    coreValue: "₹12,00,000",
    bonusValue: "₹12,00,000",
    totalValue: "₹24,00,000"
  },
  {
    level: "Local Franchise",
    fee: "₹12,000–₹1,20,000",
    coreValue: "₹1,20,000",
    bonusValue: "₹1,20,000",
    totalValue: "₹2,40,000"
  }
];

const coreOffers = [
  { icon: Crown, title: "Full Franchise Rights", desc: "State / District / City / Local rights for your region" },
  { icon: SparklesIcon, title: "Branding + Marketing Ecosystem", desc: "Nitai branding, ads, funnels, automated content engine" },
  { icon: Trophy, title: "AI Skill Academy (White-Labeled)", desc: "100+ courses, certificates, LMS, monthly updates" },
  { icon: Zap, title: "Digital Services Agency", desc: "Graphics, websites, AI bots, automation, branding" },
  { icon: Star, title: "AI Consulting Agency Setup", desc: "Scripts, frameworks, templates for premium consulting" },
  { icon: TrendingUp, title: "AI Automation System", desc: "CRM, LMS, ERP, lead/sales/billing automation" },
  { icon: Award, title: "Leadership Training", desc: "Monthly workshops with high-performance transformation" },
  { icon: CheckCircle2, title: "Govt, CSR & Institution Models", desc: "Ready models for schools, colleges, MSME, govt" }
];

const bonusStack = [
  { number: 1, title: "WAIO Membership Ecosystem", value: "₹5,00,000", desc: "100+ premium digital assets, tools, libraries" },
  { number: 2, title: "AI Automation Agency Setup Kit", value: "₹2,00,000", desc: "Scripts, SOPs, templates, pricing sheets" },
  { number: 3, title: "AI Tools Library — 2,000+ Assets", value: "₹2,00,000", desc: "Complete digital asset collection" },
  { number: 4, title: "AI Books + Resale Rights Bundle", value: "₹1,50,000", desc: "Resellable content library" },
  { number: 5, title: "Digital Business Bundles", value: "₹1,00,000", desc: "Ready-to-use business packages" },
  { number: 6, title: "Databases & Contact Bundles", value: "₹1,00,000", desc: "Targeted contact databases" },
  { number: 7, title: "Premium AI Courses (Recorded + Live)", value: "₹3,00,000", desc: "Comprehensive AI education" },
  { number: 8, title: "AI Coaching", value: "₹1,00,000", desc: "Personal AI implementation coaching" },
  { number: 9, title: "Leadership & Mindset Mastery", value: "₹2,00,000", desc: "Transform your leadership mindset" },
  { number: 10, title: "Lifetime Community Access + Events", value: "₹2,00,000", desc: "Network with top leaders" }
];

const unmatchableReasons = [
  "No other franchise gives AI + Digital + Consulting + Automation together",
  "No other franchise gives ready customers (B2A, B2B, B2C, B2G)",
  "No other franchise provides 120+ revenue streams",
  "No other franchise offers a fully automated business backend",
  "No other franchise includes a 20X value pack"
];

export default function BonusSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="bonus-master" id="bonus">

      {/* SECTION 1: Opening - White Background */}
      <div className="bonus-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">THE NITAI MASTER FRANCHISE 20X VALUE OFFER</h2>
            <h3 className="section-subtitle dark">
              The Most Powerful Offer Ever Created in the AI & Digital Education Industry.
            </h3>

            <div className="opening-statement">
              <p className="statement-line dark">"Some opportunities are good.</p>
              <p className="statement-line dark">Some are great.</p>
              <p className="statement-line dark">But a few are so valuable…</p>
              <p className="statement-line emphasis dark">that saying NO becomes impossible."</p>

              <div className="opportunity-text">
                <p className="opp-text dark">This is that opportunity.</p>
                <p className="opp-text dark">
                  Because today, you're not just buying a franchise.
                </p>
                <p className="opp-text emphasis dark">
                  You're receiving an entire <strong className="gold-text">AI Empire</strong> — ready to run, ready to scale, ready to earn.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="value-badge-20x"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: 999999, ease: "easeInOut" }}
                className="badge-content"
              >
                <span className="badge-number">20X</span>
                <span className="badge-label">VALUE</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>


        <div className="geometric-shapes">
          <motion.div
            className="shape shape-1"
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 18, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 2: Pricing Table - Navy Blue Background */}
      <div className="bonus-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">💎 FRANCHISE VALUE BREAKDOWN (20X)</h2>

            <div className="pricing-table">
              <div className="table-header">
                <div className="table-cell">Franchise Type</div>
                <div className="table-cell">Franchise Fee</div>
                <div className="table-cell">Core Value (10X)</div>
                <div className="table-cell">Bonus Value (10X)</div>
                <div className="table-cell">Total Value (20X)</div>
              </div>
              {franchisePricing.map((pricing, index) => (
                <motion.div
                  key={pricing.level}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="table-row"
                >
                  <div className="table-cell level">{pricing.level}</div>
                  <div className="table-cell fee">{pricing.fee}</div>
                  <div className="table-cell core">{pricing.coreValue}</div>
                  <div className="table-cell bonus">{pricing.bonusValue}</div>
                  <div className="table-cell total">{pricing.totalValue}</div>
                </motion.div>
              ))}
            </div>

            <div className="multiplier-statement">
              <p className="multiplier-text">
                "This is a <strong className="gold-highlight">20X multiplier system</strong>.<br />
                You pay for 1. You receive 20."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-2"
            animate={{ y: [0, 40, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 22, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 3: Core Offer - White Background */}
      <div className="bonus-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">🔥 WHAT THE FRANCHISE OFFERS (STACKED VALUE)</h2>
            <p className="core-intro dark">YOU GET A COMPLETE AI-POWERED BUSINESS ECOSYSTEM INCLUDING:</p>

            <div className="core-offers-grid">
              {coreOffers.map((offer, index) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="core-offer-card"
                >
                  <div className="core-icon-wrapper">
                    <offer.icon className="core-icon" />
                  </div>
                  <h3 className="core-title">{offer.title}</h3>
                  <p className="core-desc">{offer.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-3"
            animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
            transition={{ duration: 20, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 4: Bonus Stack - Navy Blue Background */}
      <div className="bonus-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">🎁 THE 10X BONUS STACK</h2>
            <p className="bonus-intro">This is where the offer becomes IRRESISTIBLE.</p>
            <p className="bonus-intro">Every franchise receives an additional 10X worth of bonuses, including:</p>

            <div className="bonus-stack-grid">
              {bonusStack.map((bonus, index) => (
                <motion.div
                  key={bonus.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bonus-stack-card"
                >
                  <div className="bonus-number-badge">
                    <Gift className="gift-icon" />
                    <span className="bonus-num">#{bonus.number}</span>
                  </div>
                  <h3 className="bonus-stack-title">{bonus.title}</h3>
                  <div className="bonus-value-tag">{bonus.value} Value</div>
                  <p className="bonus-stack-desc">{bonus.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bonus-total">
              <p className="total-text">
                <strong className="gold-highlight">TOTAL BONUS VALUE = 10X REAL VALUE ADDITION</strong>
              </p>
              <p className="value-explanation">
                For every rupee you invest, you receive 2 rupees in offers + 2 rupees in bonuses = <strong className="gold-highlight">4 rupees in value</strong>.
              </p>
              <p className="exponential-text">This is true <strong className="gold-highlight">20X exponential value</strong>.</p>
            </div>
          </motion.div>
        </div>



        <div className="geometric-shapes">
          <motion.div
            className="shape shape-4"
            animate={{ y: [0, -35, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 16, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 5: Why Unmatchable - White Background */}
      <div className="bonus-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">WHY THIS OFFER IS UNMATCHABLE</h2>

            <div className="unmatchable-grid">
              {unmatchableReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="unmatchable-item"
                >
                  <div className="unmatchable-number">{index + 1}</div>
                  <p className="unmatchable-text">{reason}</p>
                </motion.div>
              ))}
            </div>

            <div className="high-ticket-close">
              <p className="close-statement dark">
                "This is not just a high-ticket offer.<br />
                This is the <strong className="gold-text">highest-value franchise opportunity in India</strong>."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-5"
            animate={{ y: [0, 30, 0], x: [0, -25, 0], rotate: [0, 360] ,opacity: [0, 0.5, 0]}}
            transition={{ duration: 19, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 6: Final CTA - Navy Blue Background */}
      <div className="bonus-section navy-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <Star className="cta-star-icon" />
              <p className="cta-message">
                "You are receiving more than you pay.<br />
                Actually… you are receiving <strong>MUCH more</strong> than what any franchise gives."
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary large"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Claim Your 20X Value Now
              </motion.button>

              <p className="cta-scroll">
                "Scroll down — and see the real success stories."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="geometric-line line-1"
            animate={{ opacity: [0, 0.5, 0], scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: 999999, ease: "easeInOut" }}
          />
          <motion.div
            className="geometric-line line-2"
            animate={{ opacity: [0, 0.4, 0], scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: 999999, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>

    </section>
  );
}
