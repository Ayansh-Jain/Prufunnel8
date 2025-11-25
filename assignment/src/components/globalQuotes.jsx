// GlobalQuotes.jsx - Why This Opportunity Section
import './globalQuotes.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Dodecahedron, MeshDistortMaterial, Sparkles, OrbitControls, Octahedron } from "@react-three/drei";
import {
  TrendingUp,
  AlertTriangle,
  Zap,
  Users,
  Building,
  AlertCircle,
  Target,
  Award,
  Brain,
  Rocket
} from "lucide-react";

const worldTransitions = [
  {
    period: "Physical World (1990–2010)",
    points: [
      "Opportunities limited by location",
      "Education limited by access",
      "Jobs limited by connections",
      "Growth limited by infrastructure",
      "Only a few could rise"
    ]
  },
  {
    period: "Digital World (2010–2022)",
    points: [
      "Internet exploded",
      "Mobile revolution began",
      "New jobs & businesses were born",
      "Digital education transformed lives",
      "Many caught the wave… many missed it"
    ]
  },
  {
    period: "AI World (2023 → 2047)",
    highlight: true,
    intro: "This is the fastest shift in human history. The world is not just changing — it is upgrading itself every 24 hours.",
    points: [
      "Writing",
      "Designing",
      "Coding",
      "Selling",
      "Managing",
      "Teaching",
      "Automating",
      "Optimizing",
      "Running businesses"
    ]
  }
];

const globalLeaders = [
  {
    name: "Narendra Modi Ji",
    role: "Prime Minister of India",
    quote: "AI will play a huge role in making India a developed nation by 2047."
  },
  {
    name: "Mukesh Ambani",
    role: "Chairman, Reliance Industries",
    quote: "AI is the new electricity. Whoever controls AI will control the future."
  },
  {
    name: "Bill Gates",
    role: "Co-founder, Microsoft",
    quote: "AI is the most important technology advance in decades."
  },
  {
    name: "Sam Altman",
    role: "CEO, OpenAI",
    quote: "In the next 5–10 years, AI will transform every industry on Earth."
  }
];

const painPoints = [
  {
    icon: TrendingUp,
    title: "Income Gap",
    points: ["Salaries not growing", "Inflation rising", "Expenses increasing", "No stability"]
  },
  {
    icon: AlertTriangle,
    title: "Job Crisis",
    points: ["AI is replacing tasks", "Companies need fewer employees", "Traditional job market evaporating"]
  },
  {
    icon: Zap,
    title: "Digital Divide",
    points: ["Cities are growing", "Districts & villages still waiting", "Opportunities concentrated"]
  },
  {
    icon: Users,
    title: "Youth Without Direction",
    points: ["Millions confused", "Unskilled", "Unemployed", "No clear path"]
  },
  {
    icon: Building,
    title: "MSME Struggling",
    points: ["Need digital transformation", "Don't know where to start", "Lack resources"]
  },
  {
    icon: AlertCircle,
    title: "Leaders Without System",
    points: ["Want to lead", "No Tools", "No Training", "No Network", "No Support"]
  }
];

export default function GlobalQuotesSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="gq-master" id="opportunity">

      {/* SECTION 1: Opening - White Background */}
      <div className="gq-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">THE BIGGEST TRANSFORMATION IN HUMAN HISTORY IS HAPPENING NOW.</h2>
            <h3 className="section-subtitle dark">Physical → Digital → AI World Transition</h3>

            <div className="opening-statement">
              <p className="statement-line">"Every revolution creates leaders…</p>
              <p className="statement-line">and also leaves millions behind."</p>
              <p className="statement-emphasis">Which side will you be on?</p>
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

      {/* SECTION 2: World Transition - Navy Blue Background */}
      <div className="gq-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title">THE TRANSITION: PHYSICAL → DIGITAL → AI WORLD</h2>

            <div className="transition-timeline">
              {worldTransitions.map((transition, index) => (
                <motion.div
                  key={transition.period}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`transition-card ${transition.highlight ? 'highlight' : ''}`}
                >
                  <div className="transition-number">{index + 1}</div>
                  <h3 className="transition-period">{transition.period}</h3>

                  {transition.intro && (
                    <p className="transition-intro">{transition.intro}</p>
                  )}

                  {transition.highlight && (
                    <p className="ai-doing-intro">AI is now:</p>
                  )}

                  <ul className="transition-list">
                    {transition.points.map((point, i) => (
                      <li key={i} className="transition-point">
                        {transition.highlight ? '✔' : '•'} {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="urgency-question">
              <p className="question-text">
                The only question is: <strong>Will you be the one using AI…</strong><br />
                or will someone else use AI to replace you?
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

      {/* SECTION 3: Global Leaders Quotes - White Background */}
      <div className="gq-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">GLOBAL LEADERS ON AI — THE FUTURE IS NOW</h2>
            <p className="section-intro dark">When the world's most powerful leaders speak, the wise listen.</p>

            <div className="quotes-grid">
              {globalLeaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="quote-card"
                >
                  <div className="quote-icon">
                    <Brain className="brain-icon" />
                  </div>
                  <h3 className="leader-name">{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  <p className="leader-quote">"{leader.quote}"</p>
                </motion.div>
              ))}
            </div>

            <div className="interpretation-box">
              <p className="interpretation-title">🔥 High-Ticket Interpretation</p>
              <p className="interpretation-question">You know what this means?</p>
              <div className="interpretation-points">
                <p className="interp-point">➡ The world is not waiting.</p>
                <p className="interp-point">➡ AI is not slowing down.</p>
                <p className="interp-point">➡ The opportunity is not coming — it is here.</p>
                <p className="interp-point">➡ The people who adopt it first become the new leaders.</p>
              </div>
              <p className="interpretation-conclusion">
                This is why <strong>NITAI AI & Digital Empire Master Franchise</strong><br />
                is not just timely… It's <strong className="emphasis-gold">EXACTLY</strong> what India needs <strong className="emphasis-gold">RIGHT NOW</strong>.
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

      {/* SECTION 4: Pain Points - Navy Blue Background */}
      <div className="gq-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title">THE PAIN POINTS</h2>
            <p className="pain-intro">If you're reading this, you already feel the pain:</p>

            <div className="pain-grid">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={pain.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="pain-card"
                >
                  <div className="pain-icon-wrapper">
                    <pain.icon className="pain-icon" />
                  </div>
                  <h3 className="pain-title">{pain.title}</h3>
                  <ul className="pain-list">
                    {pain.points.map((point, i) => (
                      <li key={i} className="pain-point">{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="pain-opportunity">
              <p className="pain-quote">
                "This gap is not a challenge. This gap is <strong>your opportunity</strong>."
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

      {/* SECTION 5: Once-in-a-Lifetime Opportunity - White Background */}
      <div className="gq-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">THE AI REVOLUTION: ONCE-IN-A-LIFETIME OPPORTUNITY</h2>
            <p className="opportunity-intro dark">Imagine being among the FIRST 1%:</p>

            <div className="opportunity-grid">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="opportunity-item"
              >
                <Rocket className="opp-icon" />
                <p>Bringing AI to your entire state</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="opportunity-item"
              >
                <Users className="opp-icon" />
                <p>Digitizing thousands of students</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="opportunity-item"
              >
                <Building className="opp-icon" />
                <p>Transforming hundreds of businesses</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="opportunity-item"
              >
                <TrendingUp className="opp-icon" />
                <p>Creating jobs & empowerment</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="opportunity-item"
              >
                <Target className="opp-icon" />
                <p>Leading your district into the AI world</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="opportunity-item"
              >
                <Award className="opp-icon" />
                <p>Generating 120+ revenue streams</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="opportunity-item"
              >
                <Zap className="opp-icon" />
                <p>Becoming the official regional AI authority</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="opportunity-item"
              >
                <Brain className="opp-icon" />
                <p>Running an autonomous digital empire</p>
              </motion.div>
            </div>

            <div className="lifetime-statement">
              <p className="lifetime-text dark">This is the kind of opportunity that comes:</p>
              <div className="lifetime-badges">
                <span className="lifetime-badge">Once in 100 years</span>
                <span className="lifetime-badge">Once in one lifetime</span>
                <span className="lifetime-badge">Once per generation</span>
              </div>
              <p className="lifetime-emphasis dark">
                And <strong className="emphasis-gold">YOU</strong> are standing right in front of it.
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

      {/* SECTION 6: Final CTA - Navy Blue Background */}
      <div className="gq-section navy-bg cta-section">
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
                "Now that you see the massive shift…<br />
                scroll down and discover the system that lets <strong>YOU</strong> lead the AI Revolution in your region."
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Seize This Opportunity
              </motion.button>

              <p className="cta-urgency">This is your moment. Don't miss it.</p>
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
