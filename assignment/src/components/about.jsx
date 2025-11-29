// About.jsx - NITAI Ecosystem
import './about.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Sparkles, OrbitControls, Torus } from "@react-three/drei";
import {
  Sparkles as SparklesIcon,
  Target,
  Users,
  Zap,
  Globe,
  GraduationCap,
  Heart,
  TrendingUp,
  Award,
  MapPin
} from "lucide-react";

const sectors = [
  "AI & Digital",
  "Education",
  "Agriculture",
  "Health",
  "Social Service",
  "Technology",
  "Media",
  "Business & Economy",
  "Energy",
  "Spirituality",
  "Youth Development",
  "Rural Development"
];

const pillars = [
  {
    icon: SparklesIcon,
    title: "AI Empowerment",
    points: ["AI Skills", "AI Tools", "Automation", "Consulting", "AI Jobs", "AI Labs"]
  },
  {
    icon: Globe,
    title: "Digital Empowerment",
    points: ["Digital Education", "Digital Services", "Digital Businesses", "MSME Digitization", "Enterprise Transformation"]
  },
  {
    icon: Heart,
    title: "Social Empowerment",
    points: ["Beggar-Free India", "Village Upliftment", "Women Empowerment", "Youth Transformation"]
  },
  {
    icon: GraduationCap,
    title: "Education Empowerment",
    points: ["Schools", "Colleges", "Skill Centers", "Entrepreneurship", "Leadership Programs"]
  },
  {
    icon: Target,
    title: "Spiritual & Cultural",
    points: ["Values", "Discipline", "Devotion", "Meditation", "Community Upliftment"]
  }
];

const milestones = [
  { icon: TrendingUp, number: "100+", label: "Projects Executed" },
  { icon: Users, number: "12,000+", label: "Students Empowered" },
  { icon: Users, number: "2,000+", label: "Farmers Supported" },
  { icon: MapPin, number: "100+", label: "Districts Reached" },
  { icon: Globe, number: "5+", label: "Countries" },
  { icon: Award, number: "12", label: "Sectors Covered" }
];

export default function AboutSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="about-master" id="about">

      {/* SECTION 1: Opening - White Background */}
      <div className="about-section white-bg">

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div><h2 className="section-title dark">THE NITAI ECOSYSTEM</h2>
            <h3 className="section-subtitle dark">
              India's First Social + Digital + AI Civilization Development Movement
            </h3>
            
            <div className="opening-hook">
              <p className="hook-line">"Before you join an empire… you must know the heart behind it."</p>
              <div className="hook-content">
                <p className="hook-text">This is NOT just another company.</p>
                <p className="hook-text">This is NOT just another franchise.</p>
                <p className="hook-text strong">
                  NITAI is a movement, a mission, and a multi-sector ecosystem built to uplift people,
                  transform lives, and build India's AI-powered future.
                </p>
              </div>
            </div>
            </div>
            <video src="./k.mp4" loop autoPlay controls muted></video>
          </motion.div>
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

      {/* SECTION 2: Vision & Mission - Navy Blue Background */}
      <div className="about-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title">🌈 Vision & Mission</h2>

            <div className="vision-mission-grid">
              <div className="vm-card">
                <h3 className="vm-title">Our Vision:</h3>
                <p className="vm-text">
                  To build a nation where every human, regardless of background,
                  has access to AI skills, digital empowerment, prosperity, and purpose.
                </p>
              </div>

              <div className="vm-card">
                <h3 className="vm-title">Our Mission:</h3>
                <ul className="mission-list">
                  <li>AI for All</li>
                  <li>AI Everywhere</li>
                  <li>AI for Good</li>
                  <li>Digital Empowerment for Every State, District, City & Village</li>
                  <li>Global AI Leadership for India by 2047</li>
                </ul>
              </div>
            </div>

            <div className="conversational-hook">
              <p className="hook-quote">
                "When technology empowers people… society transforms.<br />
                When society transforms… nations rise."
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3D Element */}

        <div className="geometric-shapes">
          <motion.div
            className="shape shape-2"
            animate={{ y: [0, 40, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 22, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 3: Who We Are - White Background */}
      <div className="about-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">🌐 Who We Are</h2>

            <p className="intro-text dark">
              NITAI Group is a multi-dimensional social & digital conglomerate working in:
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">12</div>
                <div className="stat-label">Sectors</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12</div>
                <div className="stat-label">Foundations</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Organizations</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Districts</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Millions</div>
                <div className="stat-label">Beneficiaries</div>
              </div>
            </div>

            <div className="combine-section">
              <p className="combine-intro dark">We combine:</p>
              <div className="combine-grid">
                <div className="combine-item">✔ Technology</div>
                <div className="combine-item">✔ Education</div>
                <div className="combine-item">✔ Social Development</div>
                <div className="combine-item">✔ Economic Empowerment</div>
                <div className="combine-item">✔ Spiritual Upliftment</div>
              </div>
              <p className="combine-outro dark">into one harmonious ecosystem of growth and service.</p>
            </div>

            <div className="authority-statement">
              <p className="authority-text">
                "NITAI bridges the gap between India's villages and the world's digital future."
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

      {/* SECTION 4: What We Do - Navy Blue Background */}
      <div className="about-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title">🛠️ What We Do</h2>
            <p className="section-intro">
              NITAI Ecosystem operates across every core pillar society needs to grow:
            </p>

            <div className="pillars1-grid">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="pillar-card"
                >
                  <div className="pillar-icon1-wrapper">
                    <pillar.icon className="pillar-icon1" />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <ul className="pillar-list">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="pillar-point">● {point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="high-ticket-line">
              <p>"We don't build businesses. We build civilizations."</p>
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

      {/* SECTION 5: 12 Sectors - White Background */}
      <div className="about-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">🏛️ The NITAI Structure</h2>
            <p className="section-intro dark">
              NITAI Ecosystem is systematically structured like a modern digital civilization, covering:
            </p>

            <div className="structure1-grid">
              <div className="structure-column">
                <h3 className="structure-heading">12 Sectors</h3>
                <div className="sectors1-grid">
                  {sectors.map((sector, index) => (
                    <motion.div
                      key={sector}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="sector-badge"
                    >
                      <span className="sector-number">{index + 1}</span>
                      <span className="sector-name">{sector}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="structure-column">
                <h3 className="structure-heading">12 Foundations</h3>
                <p className="structure-text">Each sector has a foundation dedicated to:</p>
                <ul className="foundation-list">
                  <li>● Research</li>
                  <li>● Innovation</li>
                  <li>● Projects</li>
                  <li>● Implementation</li>
                  <li>● Impact</li>
                </ul>
              </div>

              <div className="structure-column">
                <h3 className="structure-heading">12 Organizations</h3>
                <p className="structure-text">
                  Each organization executes the mission across districts & states.
                </p>
              </div>
            </div>

            <div className="ecosystem-statement">
              <p className="statement-text2 dark">
                NITAI is a self-sustaining universe of service + innovation.
              </p>
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
            className="shape shape-5"
            animate={{ y: [0, 30, 0], x: [0, -25, 0], rotate: [0, 360] }}
            transition={{ duration: 19, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 6: Milestones - Navy Blue Background */}
      <div className="about-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title">🏆 Milestones & Achievements</h2>

            <div className="milestones-grid">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="milestone-card"
                >
                  <div className="milestone-icon-wrapper">
                    <milestone.icon className="milestone-icon" />
                  </div>
                  <div className="milestone-number">{milestone.number}</div>
                  <div className="milestone-label">{milestone.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="achievements-list">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="achievement-item"
              >
                ✔ World AI Summit organized in India
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="achievement-item"
              >
                ✔ First Ideal Smart Village Model built in MP (Umari)
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="achievement-item"
              >
                ✔ NITAI Beggar-Free India Movement launched
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="achievement-item"
              >
                ✔ Global participation across India, Nepal, Singapore, US
              </motion.div>
            </div>

            <div className="trust-line">
              <p>"NITAI creates leaders who create leaders."</p>
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
      <div className="about-section white-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <p className="cta-intro dark">
                "Now that you know the power of the Nitai Ecosystem…<br />
                imagine what happens when <strong>YOU</strong> become a master leader of this revolution."
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Discover the Master Franchise
              </motion.button>

              <p className="cta-arrow">↓</p>
              <p className="cta-subtitle dark">
                Scroll down to discover how the Nitai Master Franchise can transform your state or district.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
