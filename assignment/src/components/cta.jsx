// CTA.jsx - Apply Now (Final Call to Action)
import './cta.css';
import { motion } from 'framer-motion';
import {
  MapPin,
  Building,
  Home,
  Users,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  Download,
  Calendar,
  CreditCard,
  Zap,
  Heart,
  ArrowRight
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const franchisePositions = [
  {
    id: "smf",
    title: "STATE MASTER FRANCHISE (SMF)",
    color: "#2196F3",
    icon: MapPin,
    seats: "1 seat per state — ONLY ONE",
    description: "Whoever takes it becomes the official AI & Digital Leader of the entire state.",
    fee: "₹12,00,000",
    value: "₹2.4 CRORE"
  },
  {
    id: "dmf",
    title: "DISTRICT MASTER FRANCHISE (DMF)",
    color: "#4CAF50",
    icon: Building,
    seats: "Only 3 seats per district",
    description: "Become the head of AI transformation in your district.",
    fee: "₹5,00,000",
    value: "₹1 CRORE"
  },
  {
    id: "cmf",
    title: "CITY MASTER FRANCHISE (CMF)",
    color: "#FF9800",
    icon: Users,
    seats: "Only 5 seats per major city",
    description: "Become the official AI & Digital Authority of your city.",
    fee: "₹1,20,000",
    value: "₹24 LAKH"
  },
  {
    id: "lf",
    title: "LOCAL CENTER FRANCHISE (LF)",
    color: "#FFC107",
    icon: Home,
    seats: "Limited to demand",
    description: "Run Nitai AI Skill & Digital Center in your locality.",
    fee: "₹12,000 – ₹1,20,000",
    value: "₹2,40,000"
  }
];

const fomoReasons = [
  "AI is the hottest industry right now",
  "Digital transformation demand is exploding",
  "Businesses, schools & governments need AI immediately",
  "Existing franchises are already earning",
  "Each territory has strict exclusivity"
];

const actionButtons = [
  {
    id: "apply",
    icon: MessageSquare,
    title: "APPLY NOW",
    subtitle: "WhatsApp AI Form",
    description: "Tap HERE → Fill your details → Our WhatsApp AI Assistant will guide you step-by-step.",
    color: "#25D366",
    link: "https://lp.nitaigroup.com/webinar-leads"
  },
  {
    id: "download",
    icon: Download,
    title: "DOWNLOAD PROSPECTUS",
    subtitle: "Full Franchise Details (PDF)",
    description: "Instant access to Offer details, Revenue models, Bonus stack (20X value), Agreements, Success stories",
    color: "#FF5722",
    link: "https://lp.nitaigroup.com/webinar-leads"
  },
  {
    id: "call",
    icon: Calendar,
    title: "BOOK A STRATEGY CALL",
    subtitle: "Automated Calendar",
    description: "Select your slot → AI will confirm → No human needed.",
    color: "#2196F3",
    link: "https://lp.nitaigroup.com/webinar-leads"
  },
  {
    id: "block",
    icon: CreditCard,
    title: "BLOCK YOUR SEAT",
    subtitle: "Just ₹1,200 (Refundable)",
    description: "Secure your seat BEFORE someone else takes it. Refundable if not selected.",
    color: "#9C27B0",
    link: "https://lp.nitaigroup.com/webinar-leads"
  }
];

const legacyBuilding = [
  "Digital Bharat",
  "AI-enabled India",
  "Smart Districts",
  "Empowered Youth",
  "Skilled Communities",
  "Ideal Smart Villages",
  "Jobs, wealth & opportunities",
  "A legacy that lives beyond you"
];

export default function CTASection() {
  return (
    <section className="cta-master" id="apply">

      {/* SECTION 1: Opening - White Background */}
      <div className="cta-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">APPLY NOW — TAKE OWNERSHIP OF YOUR REGION'S AI FUTURE</h2>
            <h3 className="section-subtitle dark">
              Limited Seats • High Demand • Once-In-a-Lifetime Opportunity
            </h3>

            <div className="emotional-opening">
              <AlertCircle className="opening-icon" />
              <p className="opening-line dark">
                "Every district has only <strong>ONE leader</strong> who transforms everything.
              </p>
              <p className="opening-question dark">
                Will that leader be <strong className="gold-text">YOU</strong>?"
              </p>

              <div className="urgency-text">
                <p className="urgency-line dark">The window is open right now…</p>
                <p className="urgency-line emphasis dark">and it will close very quickly.</p>
              </div>
            </div>
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

      {/* SECTION 2: Franchise Positions - Navy Blue Background */}
      <div className="cta-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">FRANCHISE POSITIONS AVAILABLE (VERY LIMITED)</h2>

            <div className="positions-grid">
              {franchisePositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="position-card"
                >
                  <div className="position-header" style={{ borderColor: position.color }}>
                    <div className="position-icon-wrapper" style={{ background: position.color }}>
                      <position.icon className="position-icon" />
                    </div>
                    <h3 className="position-title">{position.title}</h3>
                  </div>

                  <div className="position-seats" style={{ color: position.color }}>
                    {position.seats}
                  </div>

                  <p className="position-description">{position.description}</p>

                  <div className="position-pricing">
                    <div className="pricing-row">
                      <span className="pricing-label">Franchise Fee:</span>
                      <span className="pricing-value fee">{position.fee}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="pricing-label">Total Value You Get:</span>
                      <span className="pricing-value value">{position.value}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
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

      {/* SECTION 3: FOMO & Action Buttons - White Background */}
      <div className="cta-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">⚠️ SEATS ARE FILLING FAST</h2>

            <div className="fomo-grid">
              {fomoReasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="fomo-item"
                >
                  <CheckCircle2 className="fomo-check" />
                  <span>{reason}</span>
                </motion.div>
              ))}
            </div>

            <div className="fomo-statement">
              <p className="fomo-text dark">
                "Miss this now, and <strong className="gold-text">someone else in your region</strong> becomes the authority forever."
              </p>
            </div>

            <div className="divider" />

            <h2 className="section-title dark centered">TAKE ACTION NOW</h2>

            <div className="action-buttons-grid">
              {actionButtons.map((button, index) => (
                <motion.div
                  key={button.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="action-button-card"
                  onClick={() => window.open(button.link, "_blank")}
                >
                  <div className="action-icon-wrapper" style={{ background: button.color }}>
                    <button.icon className="action-icon" />
                  </div>
                  <h3 className="action-title">{button.title}</h3>
                  <p className="action-subtitle" style={{ color: button.color }}>{button.subtitle}</p>
                  <p className="action-description">{button.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="action-tap-btn"
                    style={{ background: button.color }}
                  >
                    TAP HERE <Zap className="tap-icon" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="leaders-statement">
              <p className="leaders-text dark">
                "Leaders take decisions <strong className="gold-text">first</strong>. Followers wait."
              </p>
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

      {/* SECTION 4: Legacy & Final CTA - Navy Blue Background */}
      <div className="cta-section navy-bg final-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <Heart className="legacy-heart-icon" />
            <h2 className="section-title centered">💛 PURPOSE + PROFIT + IMPACT</h2>

            <p className="legacy-intro">
              By becoming a Nitai AI & Digital Master Franchise, you're not only earning…<br />
              <strong className="emphasis-gold">You're building:</strong>
            </p>

            <div className="legacy-grid">
              {legacyBuilding.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="legacy-item"
                >
                  <CheckCircle2 className="legacy-check" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="founder-note">
              <p className="founder-quote">
                "Leaders are remembered not for what they earned…<br />
                but for <strong className="emphasis-gold">what they built for humanity</strong>."
              </p>
              <div className="calling-text">
                <p>This is your chance.</p>
                <p>This is your calling.</p>
                <p className="emphasize">This is your moment to lead.</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 15px 50px rgba(212, 175, 55, 0.7)" }}
              whileTap={{ scale: 0.97 }}
              className="final-cta-btn"
              onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
            >
              <SiWhatsapp className="whatsapp-icon" />
              YES! I WANT TO APPLY FOR MY REGION'S MASTER FRANCHISE NOW
              <ArrowRight className="arrow-icon" />
            </motion.button>

            <div className="micro-cta">
              <p>Limited Seats • First Come First Serve • Lifetime Opportunity</p>
            </div>

            <div className="transition-message">
              <p className="transition-question">Still have questions?</p>
              <p className="transition-answer">
                Check <strong>FAQ & Terms</strong>.<br />
                Your doubts will disappear.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-4"
            animate={{ y: [0, -35, 0], rotate: [0, 360] }}
            transition={{ duration: 16, repeat: 999999, ease: "easeInOut" }}
          />
          <motion.div
            className="geometric-line line-1"
            animate={{ opacity: [0, 0.5, 0], scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

    </section>
  );
}