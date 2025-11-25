// Business.jsx - Business Models & Target Customers
import './business.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Tetrahedron, MeshDistortMaterial, Sparkles, OrbitControls, Icosahedron } from "@react-three/drei";
import {
  GraduationCap,
  Building2,
  Users,
  Landmark,
  Check,
  TrendingUp,
  Briefcase,
  Target,
  Award
} from "lucide-react";

const businessPillars = [
  {
    id: "b2a",
    title: "B2A (Academia)",
    subtitle: "Schools • Colleges • Universities",
    icon: GraduationCap,
    color: "#4CAF50",
    whoServe: [
      "Schools (CBSE, ICSE, State boards)",
      "Colleges (Arts, Science, Commerce)",
      "Engineering Institutes",
      "Skill Development Centers",
      "Universities & Departments"
    ],
    whatDeliver: [
      "AI Skill Development Programs",
      "Digital Literacy Programs",
      "Coding, Robotics, Automation",
      "Faculty Training",
      "Student Employability Programs",
      "AI Labs Setup",
      "Annual Subscription Plans"
    ],
    whyBuy: "Education institutions are under immense pressure to become AI-ready. You become their official district/state AI partner.",
    quote: "Every school, every college, every university will need an AI partner. That partner can be YOU."
  },
  {
    id: "b2b",
    title: "B2B (Businesses)",
    subtitle: "MSME • Startups • Corporates • NGOs • FPOs",
    icon: Building2,
    color: "#2196F3",
    whoServe: [
      "MSMEs",
      "Startups",
      "Corporates",
      "NGOs",
      "SHGs",
      "FPOs",
      "Retail & Service Businesses"
    ],
    whatDeliver: [
      "Digital Transformation",
      "AI Automation",
      "Business Process Automation (BPA)",
      "CRM + ERP setup",
      "Branding + Social Media",
      "Website + Funnels + Ads",
      "AI Chatbots + Agents",
      "Digital Workforce Training",
      "Automation Retainers"
    ],
    whyBuy: "Because AI reduces cost, increases profit, saves time, and businesses NOW know this.",
    quote: "You don't sell services… you sell Profit, Growth & Transformation."
  },
  {
    id: "b2c",
    title: "B2C (Individuals)",
    subtitle: "Youth • Students • Women • Professionals • Leaders",
    icon: Users,
    color: "#FF9800",
    whoServe: [
      "Students & Graduates",
      "Job Seekers",
      "Employees",
      "Freelancers",
      "Housewives",
      "Entrepreneurs",
      "Influencers",
      "Civil Service Aspirants"
    ],
    whatDeliver: [
      "AI Career Programs",
      "AI Jobs Training",
      "Freelancing Training",
      "Digital Skill Programs",
      "Career Counseling",
      "Leadership Training",
      "Certification Programs",
      "Personality Transformation"
    ],
    whyBuy: "Because AI Jobs & Digital Jobs are replacing traditional employment. Parents + youth are desperately looking for skills of the future.",
    quote: "One skill can change a life. You provide the skill that changes thousands."
  },
  {
    id: "b2g",
    title: "B2G (Government)",
    subtitle: "Departments • Schemes • CSR • Grants",
    icon: Landmark,
    color: "#9C27B0",
    whoServe: [
      "State departments",
      "District administration",
      "Smart City Mission",
      "Schools under govt",
      "Skill development missions",
      "CSR wings of corporates",
      "Panchayats & local bodies"
    ],
    whatDeliver: [
      "Govt workshops & AI Literacy Programs",
      "Digital India support implementation",
      "Skill development under govt funding",
      "CSR-funded community programs",
      "AI in agriculture initiatives",
      "Smart Village Models",
      "Rural digital empowerment"
    ],
    whyBuy: "Government schemes REQUIRE: AI literacy, Digital transformation, Skill development, Youth empowerment, Village upliftment. You become their official execution partner.",
    quote: "When the government moves, the district moves. And YOU lead that movement."
  }
];

const coreCapabilities = [
  { icon: Target, text: "4 markets" },
  { icon: TrendingUp, text: "120+ revenue streams" },
  { icon: Users, text: "Thousands of potential clients" },
  { icon: Award, text: "Zero competition (official AI partner)" },
  { icon: Briefcase, text: "Built-in ecosystem multiplies income" }
];

export default function BusinessModelsSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="business-master" id="business">

      {/* SECTION 1: Opening - White Background */}
      <div className="business-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">THE 4-PILLAR BUSINESS MODEL OF NITAI AI & DIGITAL EMPIRE</h2>
            <h3 className="section-subtitle dark">Serve Everyone. Earn from Everywhere. Lead Your Entire Region.</h3>

            <div className="opening-statement">
              <p className="statement-line dark">"If you can serve the people…</p>
              <p className="statement-line dark">you can lead the region.</p>
              <p className="statement-line dark">If you can lead the region…</p>
              <p className="statement-line dark">you can build an empire."</p>

              <p className="intro-text dark">
                The Nitai Franchise Ecosystem is designed to give you <strong>clients from Day 1</strong>,
                because it covers the entire market of your State / District / City / Local Area through
                <strong> FOUR powerful customer segments</strong>.
              </p>
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

      {/* SECTION 2: The 4 Pillars - Navy Blue Background */}
      <div className="business-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">THE 4 POWERFUL CUSTOMER SEGMENTS</h2>

            <div className="pillars-section">
              {businessPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="pillar-card"
                >
                  <div className="pillar-header">
                    <div className="pillar-icon2-wrapper" style={{ background: pillar.color }}>
                      <pillar.icon className="pillar-icon2" />
                    </div>
                    <div className="pillar-title-group">
                      <h3 className="pillar-title">{pillar.title}</h3>
                      <p className="pillar-subtitle">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <div className="pillar-section">
                    <h4 className="pillar-section-title">Who You Serve:</h4>
                    <ul className="pillar-list">
                      {pillar.whoServe.map((item, i) => (
                        <li key={i} className="pillar-item">
                          <Check className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pillar-section">
                    <h4 className="pillar-section-title">What You Deliver:</h4>
                    <ul className="pillar-list">
                      {pillar.whatDeliver.map((item, i) => (
                        <li key={i} className="pillar-item">• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pillar-section">
                    <h4 className="pillar-section-title">Why They Will Buy:</h4>
                    <p className="pillar-why">{pillar.whyBuy}</p>
                  </div>

                  <div className="pillar-quote">
                    "{pillar.quote}"
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

      {/* SECTION 3: Core Power - White Background */}
      <div className="business-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">🎯 THE CORE POWER OF THE BUSINESS MODEL</h2>
            <p className="core-intro dark">This franchise gives you:</p>

            <div className="core-grid">
              {coreCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="core-card"
                >
                  <capability.icon className="core-icon" />
                  <p className="core-text">{capability.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="needs-section">
              <p className="needs-intro dark">You don't chase clients.</p>
              <div className="needs-list">
                <p className="needs-item">Clients need you.</p>
                <p className="needs-item">Institutions need you.</p>
                <p className="needs-item">Government needs you.</p>
                <p className="needs-item">Businesses need you.</p>
                <p className="needs-item">Youth needs you.</p>
              </div>
            </div>

            <div className="emotional-close">
              <p className="close-text dark">
                "This is not a business.<br />
                This is a service.<br />
                <strong className="emphasis-gold">And service creates unshakeable success.</strong>"
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

      {/* SECTION 4: Final CTA - Navy Blue Background */}
      <div className="business-section navy-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <p className="cta-message">
                "Now that you know <strong>WHO</strong> you will serve…"
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary large"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Discover Your 120+ Revenue Streams
              </motion.button>

              <p className="cta-scroll">
                "Scroll down to discover HOW you will earn from 120+ powerful revenue streams."
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
