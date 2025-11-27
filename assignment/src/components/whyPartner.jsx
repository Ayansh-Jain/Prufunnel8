// WhyPartner.jsx - Why Partner with NITAI Empire
import './whyPartner.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles, OrbitControls, Dodecahedron } from "@react-three/drei";
import {
  Network,
  Target,
  TrendingUp,
  Users,
  Rocket,
  Heart,
  CheckCircle2,
  Award,
  Sparkles as SparklesIcon,
  Timer
} from "lucide-react";

const foundationPillars = [
  { label: "Purpose", icon: Target },
  { label: "Service", icon: Heart },
  { label: "Devotion", icon: SparklesIcon },
  { label: "Leadership", icon: Award },
  { label: "Technology", icon: Network },
  { label: "Transformation", icon: TrendingUp },
  { label: "Humanity", icon: Users }
];

const ecosystemSectors = [
  "AI & Digital", "Education", "Agriculture", "Social Service",
  "Business Development", "Youth Empowerment", "Spirituality",
  "Skill Development", "Rural Development", "Technology", "Media", "Community Impact"
];

const profitPurposeImpact = [
  "Earn", "Lead", "Serve", "Transform", "Empower", "Build a legacy"
];

const socialImpact = [
  { number: "12,000+", label: "Students Impacted" },
  { number: "2,000+", label: "Farmers Supported" },
  { number: "100+", label: "Districts Reached" },
  { number: "100+", label: "Projects Executed" }
];

const supportSystem = [
  "360° Support System",
  "AI-powered Backend",
  "Leadership Community",
  "Weekly Growth Calls",
  "Implementation Guidance",
  "Mentorship",
  "Tools, Templates & Systems",
  "Spiritual Grounding",
  "Brotherhood of Leaders"
];

const futureSkills = [
  "Use AI",
  "Teach AI",
  "Build AI Teams",
  "Transform Regions",
  "Create Opportunities",
  "Empower Society"
];

const higherValues = [
  "Compassion", "Service", "Devotion", "Transformation",
  "Leadership", "Prosperity", "Spiritual Grounding", "Social Upliftment"
];

export default function WhyPartnerSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="whypartner-master" id="why-partner">

      {/* SECTION 1: Opening - White Background */}
      <div className="whypartner-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">WHY NITAI EMPIRE IS YOUR TRUE PARTNER FOR THE FUTURE</h2>
            <h3 className="section-subtitle dark">
              When Technology, Spirituality & Social Service Unite — Miracles Happen.
            </h3>

            <div className="manifesto-statement">
              <p className="manifesto-line dark">"Great businesses give you money.</p>
              <p className="manifesto-line dark">Great missions give you meaning.</p>
              <p className="manifesto-line emphasis dark">NITAI gives you both."</p>

              <div className="different-text">
                <p className="diff-line dark">Most franchises are built on profit.</p>
                <p className="diff-line dark">Most companies are built on products.</p>
                <p className="diff-line dark">Most organizations are built on a single idea.</p>
                <p className="diff-line emphasis dark">But <strong className="gold-text">NITAI EMPIRE</strong> is different.</p>
              </div>

              <p className="built-on-text dark">NITAI is built on:</p>

              <div className="pillars-grid">
                {foundationPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="pillar-badge"
                  >
                    <pillar.icon className="pillar-icon" />
                    <span>{pillar.label}</span>
                  </motion.div>
                ))}
              </div>

              <p className="leaders-text dark">
                This is why <strong className="gold-text">leaders across districts and states</strong> are joining this movement.
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

      {/* SECTION 2: Ecosystem & Profit-Purpose - Navy Blue Background */}
      <div className="whypartner-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <div className="two-column-grid">
              {/* Column 1: Ecosystem */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="reason-card large"
              >
                <Network className="reason-icon" />
                <h3 className="reason-title">NOT A COMPANY — IT'S AN ECOSYSTEM</h3>
                <p className="reason-desc">
                  A multi-sector civilization development ecosystem working across:
                </p>
                <div className="sectors-grid">
                  {ecosystemSectors.map((sector, i) => (
                    <motion.div
                      key={sector}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="sector-tag"
                    >
                      <CheckCircle2 className="sector-check" />
                      {sector}
                    </motion.div>
                  ))}
                </div>
                <div className="reason-quote">
                  "You are not joining a business.<br />
                  You are joining a <strong>national transformation movement</strong>."
                </div>
              </motion.div>

              {/* Column 2: Profit + Purpose */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="reason-card large"
              >
                <Target className="reason-icon" />
                <h3 className="reason-title">PROFIT + PURPOSE + IMPACT</h3>
                <p className="reason-desc">
                  Most franchises teach you how to earn.<br />
                  <strong>NITAI teaches you how to:</strong>
                </p>
                <div className="purpose-grid">
                  {profitPurposeImpact.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="purpose-badge"
                    >
                      <CheckCircle2 className="purpose-check" />
                      {item}
                    </motion.div>
                  ))}
                </div>
                <p className="reason-text">
                  You will grow <strong>financially, emotionally, socially and spiritually</strong> — all together.
                </p>
                <div className="reason-quote">
                  "A leader without purpose loses direction.<br />
                  A leader with purpose becomes <strong>unstoppable</strong>."
                </div>
              </motion.div>
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

      {/* SECTION 3: Social Impact & Support - White Background */}
      <div className="whypartner-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">PROVEN TRACK RECORD OF SOCIAL IMPACT</h2>
            <p className="impact-intro dark">NITAI EMPIRE has already impacted:</p>

            <div className="impact-numbers-grid">
              {socialImpact.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="impact-number-card"
                >
                  <Award className="impact-award-icon" />
                  <div className="impact-number">{item.number}</div>
                  <div className="impact-label">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="achievements-list">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="achievement-item"
              >
                ✓ Global workshops & summits
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="achievement-item"
              >
                ✓ Smart Village Model
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="achievement-item"
              >
                ✓ Beggar-Free India Movement
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="achievement-item"
              >
                ✓ Digital + AI empowerment programs
              </motion.div>
            </div>

            <div className="emotional-statement">
              <p className="emotional-text dark">
                "If NITAI can transform villages… imagine what <strong className="gold-text">you can do</strong> with an entire district or state."
              </p>
            </div>

            <div className="divider" />

            <h2 className="section-title dark centered">LEADERSHIP & COMMUNITY SUPPORT</h2>
            <p className="support-intro dark">When you join as a Master Franchise, you are not alone. You are backed by:</p>

            <div className="support-grid">
              {supportSystem.map((support, index) => (
                <motion.div
                  key={support}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="support-item"
                >
                  <CheckCircle2 className="support-check" />
                  <span>{support}</span>
                </motion.div>
              ))}
            </div>

            <div className="family-statement">
              <p className="family-text dark">
                "You are joining a <strong className="gold-text">family</strong> — not a franchise network."
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

      {/* SECTION 4: Future & Values - Navy Blue Background */}
      <div className="whypartner-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            {/* Founder AI Graphic */}
            <div className="founder-ai-graphic-container1">
              
              <div className="founder-image-wrapper">
                <img src="/pfp.png" alt="Founder Silhouette" className="founder-silhouette" />
              </div>
              <div className="graphic-caption">
                <span className="caption-text">Human Leadership Powered by AI</span>
              </div>
            </div>

            <div className="two-column-grid">
              {/* Column 1: Future */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="reason-card"
              >
                <Rocket className="reason-icon" />
                <h3 className="reason-title">THE FUTURE BELONGS TO AI LEADERS</h3>
                <p className="reason-desc">
                  The world is entering a new era. The leaders of tomorrow are those who can:
                </p>
                <div className="future-skills-grid">
                  {futureSkills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="skill-badge"
                    >
                      • {skill}
                    </motion.div>
                  ))}
                </div>
                <p className="reason-text">
                  And this franchise is the <strong>fastest route</strong> to becoming that leader.
                </p>
              </motion.div>

              {/* Column 2: Values */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="reason-card"
              >
                <Heart className="reason-icon" />
                <h3 className="reason-title">ROOTED IN HIGHER VALUES</h3>
                <p className="reason-desc">NITAI stands for:</p>
                <div className="values-grid">
                  {higherValues.map((value, i) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="value-tag"
                    >
                      <CheckCircle2 className="value-check" />
                      {value}
                    </motion.div>
                  ))}
                </div>
                <p className="reason-text">
                  This is why players in the <strong>education sector, business sector, NGO sector, and government sector</strong> trust NITAI's leadership.
                </p>
                <div className="reason-quote">
                  "When values lead the mission,<br />
                  prosperity follows automatically."
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>


        <div className="geometric-shapes">
          <motion.div
            className="shape shape-4"
            animate={{ y: [0, -35, 0], rotate: [0, 360] }}
            transition={{ duration: 16, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 5: Final CTA - White Background */}
      <div className="whypartner-section white-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <Timer className="cta-timer-icon" />
              <p className="cta-understanding dark">
                "Now you understand <strong>WHY</strong> Nitai Empire is not just another business —"
              </p>
              <p className="cta-future dark">
                it is the <strong className="gold-text">future</strong> of AI-driven social and economic transformation.
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary large"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Apply Before Someone Captures Your Region
              </motion.button>

              <p className="cta-urgency dark">
                "Scroll down and apply — before someone else captures your district/state."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-5"
            animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
            transition={{ duration: 19, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

    </section>
  );
}
