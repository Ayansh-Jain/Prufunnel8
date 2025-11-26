// Founder.jsx - About Amol Patel
import './founder.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Box, MeshDistortMaterial, Sparkles, OrbitControls, Cone } from "@react-three/drei";
import {
  GraduationCap,
  Users,
  Heart,
  TrendingUp,
  Award,
  BookOpen,
  Globe,
  Sprout,
  Target,
  Zap
} from "lucide-react";

const qualifications = [
  { icon: GraduationCap, text: "M.Tech – DAVV University, Indore" },
  { icon: BookOpen, text: "PhD Scholar – AI in Agriculture & WSN" },
  { icon: Globe, text: "Trained by global institutes & digital leaders" },
  { icon: Heart, text: "Served multiple international NGOs" },
  { icon: Award, text: "Experience in national & international organizations" },
  { icon: Sprout, text: "Worked with 2,000+ farmers on natural agriculture" },
  { icon: Users, text: "Educated 12,000+ students through Nitai initiatives" }
];

const achievements = [
  { icon: TrendingUp, number: "100+", label: "Social & Digital Projects" },
  { icon: Heart, number: "12", label: "NGOs Founded" },
  { icon: Users, number: "12,000+", label: "Students Educated" },
  { icon: Sprout, number: "2,000+", label: "Farmers Supported" },
  { icon: Globe, number: "5+", label: "Countries Impacted" },
  { icon: Award, number: "12", label: "Sectors Covered" }
];

const journeyPoints = [
  "Determination",
  "Discipline",
  "Devotion",
  "Service",
  "Leadership"
];

export default function FounderSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="founder-master" id="founder">

      {/* SECTION 1: Opening - White Background */}
      <div className="founder-section white-bg">
        <div className="container">
          <div className="founder-intro-layout">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="founder-intro-content"
            >
              <h2 className="section-title dark">MEET THE FOUNDER — AMOL PATEL</h2>
              <div className="founder-badges">
                <span className="founder-badge">Visionary</span>
                <span className="founder-badge">Researcher</span>
                <span className="founder-badge">Social Architect</span>
                <span className="founder-badge">AI Educator</span>
                <span className="founder-badge">Nation Builder</span>
              </div>

              <div className="opening-quote">
                <p className="quote-line">"Some leaders build companies.</p>
                <p className="quote-line">Great leaders build ecosystems.</p>
                <p className="quote-line">Rare leaders build civilizations."</p>
                <p className="quote-emphasis">Amol Patel is that rare category.</p>
              </div>
            </motion.div>

            {/* Right Image Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="founder-image-container"
            >
              <div className="founder-image-box">
                <img
                  src="./pfp.png"
                  alt="Amol Patel - Founder"
                  className="founder-profile-image"
                />
                <div className="image-overlay">
                  <Zap className="overlay-icon" />
                </div>
              </div>
              <div className="founder-name-tag">
                <h3 className="founder-name">Amol Patel</h3>
                <p className="founder-role">Founder & Visionary</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Geometric shapes */}
        <div className="geometric-shapes">
          <motion.div
            className="shape shape-1"
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 18, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 2: International Entrepreneur - Navy Blue Background */}
      <div className="founder-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title">AN INTERNATIONAL SOCIAL & DIGITAL ENTREPRENEUR</h2>

            <p className="section-intro">
              Amol Patel is a mission-driven leader who has dedicated his life to building:
            </p>

            <div className="mission-grid">
              <div className="mission-item">✔ Educational systems</div>
              <div className="mission-item">✔ AI & digital empowerment programs</div>
              <div className="mission-item">✔ Rural development models</div>
              <div className="mission-item">✔ Social upliftment campaigns</div>
              <div className="mission-item">✔ Youth transformation ecosystems</div>
              <div className="mission-item">✔ Global research collaborations</div>
              <div className="mission-item">✔ Multi-sector organizations serving humanity</div>
            </div>

            <div className="founder-statement">
              <p className="statement-text1">
                He is the founder of <strong>NITAI Empire</strong>, a conglomerate working across<br />
                <span className="highlight">12 sectors × 12 foundations × 12 organizations</span>,<br />
                impacting thousands of lives directly and millions indirectly.
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

      {/* SECTION 3: Qualifications - White Background */}
      <div className="founder-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">QUALIFICATIONS, EXPERIENCE & RESEARCH BACKBONE</h2>

            <div className="qualifications-grid">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={qual.text}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="qualification-item"
                >
                  <div className="qual-icon-wrapper">
                    <qual.icon className="qual-icon" />
                  </div>
                  <p className="qual-text">{qual.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="blend-statement">
              <p className="blend-text dark">
                He blends <strong>technology + spirituality + leadership + social engineering</strong>,<br />
                something extremely rare in today's world.
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

      {/* SECTION 4: Guided by Values - Navy Blue Background */}
      <div className="founder-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title">GUIDED BY GURUS, ROOTED IN VALUES</h2>

            <p className="values-intro">Amol Patel attributes every success to:</p>

            <div className="gratitude-grid">
              <div className="gratitude-item">🙏 His Gurudev</div>
              <div className="gratitude-item">🙏 His parents</div>
              <div className="gratitude-item">🙏 His spiritual mentors</div>
              <div className="gratitude-item">🙏 His society and well-wishers</div>
            </div>

            <div className="mission-statement">
              <p className="mission-text">
                He has been blessed by multiple spiritual lineages and has built NITAI<br />
                not as a business, but as a <strong className="highlight-text">mission of universal service</strong>.
              </p>
            </div>

            <div className="emotional-quote">
              <p className="quote-text">
                "AI will empower the hands. Values will empower the heart.<br />
                <strong>Together, we build a new Bharat."</strong>
              </p>
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

      {/* SECTION 5: Leadership Journey - White Background */}
      <div className="founder-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">LEADERSHIP JOURNEY, RISE & IMPACT</h2>

            <div className="journey-intro">
              <p className="journey-text dark">
                Amol Patel's life began in <strong className="emphasis-gold">extreme poverty, hardship and struggle</strong>.
              </p>
              <p className="journey-text dark">
                From sleeping hungry to becoming a global AI visionary —<br />
                his life is a living example of:
              </p>
            </div>

            <div className="journey-points">
              {journeyPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="journey-badge"
                >
                  ✔ {point}
                </motion.div>
              ))}
            </div>

            <div className="achievements-section">
              <h3 className="achievements-heading dark">He built:</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="achievement-card"
                  >
                    <div className="achievement-icon-wrapper">
                      <achievement.icon className="achievement-icon" />
                    </div>
                    <div className="achievement-number">{achievement.number}</div>
                    <div className="achievement-label">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="special-achievements">
                <div className="special-item">● Beggar-Free India Campaign</div>
                <div className="special-item">● Nitai Ideal Smart Village</div>
                <div className="special-item">● India AI Summits & Workshops</div>
              </div>
            </div>

            <div className="village-story">
              <p className="story-text dark">
                He left a promising global career to return to his village <strong className="emphasis-gold">Umari, Damoh</strong><br />
                to serve his parents and rebuild rural India from the ground up.
              </p>
            </div>

            <div className="journey-quote">
              <p className="quote-text dark">
                "A man who can rebuild a village… can rebuild a nation."
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

      {/* SECTION 6: Foundational Message - Navy Blue Background */}
      <div className="founder-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="foundational-box">
              <div className="foundational-quote">
                <p className="main-quote">
                  "Mindset. Skillset. Toolset.<br />
                  These three — supported by AI & Automation —<br />
                  can lift any human from poverty to prosperity."
                </p>
                <p className="quote-author">— Amol Patel</p>
              </div>
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

      {/* SECTION 7: Final CTA - White Background */}
      <div className="founder-section white-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <p className="cta-text dark">
                "If this is the kind of leadership behind NITAI…<br />
                imagine what happens when <strong className="emphasis-gold">YOU</strong> become a leader of your State or District."
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Join This Mission
              </motion.button>

              <p className="cta-arrow">↓</p>
              <p className="scroll-text dark">Scroll down — and see how YOU can join this mission.</p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
