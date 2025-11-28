// Franchise.jsx - NITAI Franchise Ecosystem
import './franchise.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Torus, MeshDistortMaterial, Sparkles, OrbitControls, Cylinder } from "@react-three/drei";
import {
  Building2,
  MapPin,
  Users,
  TrendingUp,
  Award,
  Zap,
  ShoppingBag,
  Settings,
  BookOpen,
  Rocket,
  MessageSquare,
  BarChart3,
  Headphones,
  Check
} from "lucide-react";

const franchiseLevels = [
  {
    id: "smf",
    name: "State Master Franchise",
    shortName: "SMF",
    investment: "₹12,00,000",
    value: "₹2,40,00,000+ (20X)",
    icon: Building2,
    rights: [
      "Control 10–20 districts",
      "Appoint district franchises",
      "Earn royalty from all centers",
      "Lead state-level digital programs",
      "Corporate + Govt projects",
      "State events & summits",
      "AI labs & innovation hubs"
    ],
    earnings: [
      "₹5L–₹50L/month from district franchises",
      "₹2L–₹10L/month from state training programs",
      "₹5L–₹30L/month from govt & corporate projects"
    ],
    quote: "When you lead a state… you don't build income. You build history."
  },
  {
    id: "dmf",
    name: "District Master Franchise",
    shortName: "DMF",
    investment: "₹5,00,000",
    value: "₹1,00,00,000+ (20X)",
    icon: MapPin,
    rights: [
      "Control 3–10 city centers",
      "Lead district-level training programs",
      "Digital services & consulting",
      "Earn royalties from city & local centers",
      "Host district-level workshops & events"
    ],
    earnings: [
      "₹1L–₹5L/month from centers",
      "₹50K–₹2L/month from district events",
      "₹1L–₹5L/month from services & automation"
    ],
    quote: "The district needs a leader. Today, that leader can be you."
  },
  {
    id: "cmf",
    name: "City Master Franchise",
    shortName: "City",
    investment: "₹1,20,000",
    value: "₹24,00,000+ (20X)",
    icon: Users,
    rights: [
      "Run AI Skill Academy",
      "Offer digital services",
      "Conduct workshops",
      "Appoint local franchise units",
      "Earn royalties",
      "Serve MSMEs, startups, institutions"
    ],
    earnings: [
      "₹50K–₹2L/month from training",
      "₹30K–₹1L/month from services",
      "₹20K–₹1L/month from local center royalty"
    ],
    quote: "Cities grow when leaders grow."
  },
  {
    id: "lf",
    name: "Local Level Franchise",
    shortName: "Local",
    investment: "₹12,000 – ₹1,20,000",
    value: "₹2,40,000+ (20X)",
    icon: Award,
    rights: [
      "Run local AI training",
      "Offer services to students & professionals",
      "Support nearby schools, businesses",
      "Join DMF & SMF programs",
      "Earn through courses + services + events"
    ],
    earnings: [
      "₹20K–₹1L/month depending on town/city size"
    ],
    quote: "Local leadership builds national transformation."
  }
];

const journeySteps = [
  { number: 1, title: "Learn", description: "AI trainings + leadership + business systems", icon: BookOpen },
  { number: 2, title: "Launch", description: "Get your franchise portal, branding, CRM, LMS, tools, SOPs", icon: Rocket },
  { number: 3, title: "Lead", description: "Train, empower, support your region", icon: Users },
  { number: 4, title: "Earn", description: "120+ Income Streams", details: "Services, courses, events, automation, consulting, franchise royalty", icon: TrendingUp }
];

const supportSystems = [
  {
    title: "Automated Marketing System",
    icon: ShoppingBag,
    items: ["AI Social Media Engine", "AI Content Generator", "Lead Funnels", "Landing Pages", "WhatsApp Automation"]
  },
  {
    title: "Automated Sales System",
    icon: MessageSquare,
    items: ["AI WhatsApp Closer", "AI Voice Bot", "High-ticket scripts", "Auto appointment scheduling"]
  },
  {
    title: "Automated Onboarding System",
    icon: Settings,
    items: ["LMS portal", "Video orientation", "Step-by-step setup"]
  },
  {
    title: "Automated Operations System",
    icon: BarChart3,
    items: ["CRM dashboard", "Reporting", "Performance monitoring"]
  },
  {
    title: "Automated Growth & Innovation",
    icon: Zap,
    items: ["Updated AI tools", "Monthly upgrades", "New courses added automatically"]
  },
  {
    title: "Lifetime Support",
    icon: Headphones,
    items: ["24×7 AI support bot", "Community access", "Weekly leadership calls"]
  }
];

export default function FranchiseSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="franchise-master" id="franchise">

      {/* SECTION 1: Opening - White Background */}
      <div className="franchise-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">THE NITAI AI & DIGITAL EMPIRE FRANCHISE SYSTEM</h2>
            <h3 className="section-subtitle dark">Your Region. Your Leadership. Your AI-Powered Empire.</h3>

            <div className="opening-statement">
              <p className="statement-text dark">"You've seen the problems.</p>
              <p className="statement-text dark">You've understood the AI revolution.</p>
              <p className="statement-text dark">Now it's time to see the solution designed for leaders like you."</p>

              <p className="intro-text dark">
                The Nitai Franchise Ecosystem is India's first AI-powered, fully automated,
                multi-level digital empowerment franchise model that makes you the:
              </p>

              <div className="leader-badges">
                <span className="leader-badge">✔ State Leader</span>
                <span className="leader-badge">✔ District Authority</span>
                <span className="leader-badge">✔ City Director</span>
                <span className="leader-badge">✔ Local AI Center Head</span>
              </div>

              <p className="choice-text dark">depending on the franchise you choose.</p>
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

      {/* SECTION 2: Franchise Levels - Navy Blue Background */}
      <div className="franchise-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">CHOOSE YOUR FRANCHISE LEVEL</h2>

            <div className="franchise-grid">
              {franchiseLevels.map((franchise, index) => (
                <motion.div
                  key={franchise.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="franchise-card"
                >
                  <div className="franchise-icon-wrapper">
                    <franchise.icon className="franchise-icon" />
                  </div>

                  <h3 className="franchise-name">{franchise.name}</h3>
                  <div className="franchise-badge">{franchise.shortName}</div>

                  <div className="franchise-investment">
                    <span className="invest-label">Investment:</span>
                    <span className="invest-amount">{franchise.investment}</span>
                  </div>

                  <div className="franchise-value">
                    <span className="value-label">Value You Receive:</span>
                    <span className="value-amount">{franchise.value}</span>
                  </div>

                  <div className="rights-section">
                    <h4 className="rights-title">Your Rights:</h4>
                    <ul className="rights-list">
                      {franchise.rights.map((right, i) => (
                        <li key={i} className="right-item">
                          <Check className="check-icon" />
                          <span>{right}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="earnings-section">
                    <h4 className="earnings-title">Your Earnings (Example):</h4>
                    <ul className="earnings-list">
                      {franchise.earnings.map((earning, i) => (
                        <li key={i} className="earning-item">• {earning}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="franchise-quote">
                    "{franchise.quote}"
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className='centercta'>
                        <motion.button
                              whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                              whileTap={{ scale: 0.97 }}
                              className="cta-btn1"
                              onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
                            >
                              Apply Now
                            </motion.button>
                            </div>
        </div>

        

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-2"
            animate={{ y: [0, 40, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 22, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 3: Journey Flow - White Background */}
      <div className="franchise-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">THE FRANCHISE JOURNEY FLOW</h2>

            <div className="journey-flow">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="journey-step"
                >
                  <div className="step-number">{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  {step.details && <p className="step-details">{step.details}</p>}

                  {index < journeySteps.length - 1 && (
                    <div className="step-arrow">→</div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="journey-statement">
              <p className="statement-quote dark">
                "This is not just a franchise.<br />
                This is the fastest way to become a regional AI leader."
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

      {/* SECTION 4: Support Ecosystem - Navy Blue Background */}
      <div className="franchise-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">NITAI SUPPORT ECOSYSTEM — THE REAL POWER</h2>
            <p className="support-intro">You get a complete AI-driven backend system, including:</p>

            <div className="support-grid1">
              {supportSystems.map((system, index) => (
                <motion.div
                  key={system.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="support-card"
                >
                  <div className="support-icon-wrapper">
                    <system.icon className="support-icon" />
                  </div>
                  <h3 className="support-title">🔥 {system.title}</h3>
                  <ul className="support-list">
                    {system.items.map((item, i) => (
                      <li key={i} className="support-item1">• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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

      {/* SECTION 5: Final CTA - White Background */}
      <div className="franchise-section white-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <p className="cta-imagine dark">
                "Now imagine… <strong className="emphasis-gold">YOU</strong> leading this entire AI ecosystem in your region."
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary large"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Apply for Master Franchise
              </motion.button>

              <p className="cta-scroll dark">
                "Scroll down and see the business models you will control."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-5"
            animate={{ y: [0, 30, 0], x: [0, -25, 0], rotate: [0, 360] }}
            transition={{ duration: 19, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

    </section>
  );
}
