// Testimonials.jsx - Success Stories & Testimonials
import './testimonials.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Sparkles, OrbitControls, TorusKnot } from "@react-three/drei";
import {
  Trophy,
  Users,
  Building2,
  MapPin,
  GraduationCap,
  CheckCircle2,
  Star,
  Quote,
  TrendingUp,
  Award
} from "lucide-react";

const successStories = [
  {
    id: "world-summit",
    title: "WORLD AI SUMMIT — INDIA",
    tagline: "From a district initiative to a global intellectual platform",
    storyImage: "k.jpg",
    color: "#FFD700",
    achievements: [
      "AI Researchers brought together",
      "Innovators collaboration",
      "Educators networking",
      "Entrepreneurs participation",
      "Policy Makers engagement"
    ],
    impact: "This summit positioned NITAI as a national-level AI thought leader.",
    quote: "When your ecosystem hosts global summits… trust flows automatically."
  },
  {
    id: "smart-village",
    title: "NITAI IDEAL SMART VILLAGE — UMARI (DAMOH)",
    tagline: "India's first AI + Agriculture + Social Development village model",
    storyImage: "k1.jpg",
    color: "#4CAF50",
    achievements: [
      "100% digital awareness",
      "Skill development for women & youth",
      "Support for natural farming",
      "Rural AI training",
      "Community empowerment events",
      "Zero beggary model (pilot)"
    ],
    impact: "Complete village transformation through AI and community empowerment.",
    quote: "If one village can become smart… a whole district can become unstoppable."
  },
  {
    id: "damoh-digital",
    title: "DAMOH DIGITAL TRANSFORMATION PROJECT",
    tagline: "A district-level model for AI & digital skill penetration",
    storyImage: "k2.jpg",
    color: "#2196F3",
    achievements: [
      "AI skill programs for youth",
      "School & college workshops",
      "MSME digital adoption drives",
      "Digital literacy camps",
      "Government partnership meetings",
      "Community awareness programs"
    ],
    impact: "Thousands benefited from district-wide digital transformation.",
    quote: "Your district can be next."
  },
  {
    id: "sagar-smart",
    title: "SAGAR SMART CITY ALIGNMENT",
    tagline: "Digital + AI integration with city development",
    storyImage: "./k3.jpg",
    color: "#9C27B0",
    achievements: [
      "Students trained in AI",
      "Startups guided",
      "Women empowered",
      "Skill centers activated",
      "Community projects implemented"
    ],
    impact: "Smart city integration with comprehensive AI adoption.",
    quote: "Cities grow when leaders take initiative."
  }
];

const impactCategories = [
  {
    category: "Schools & Colleges",
    icon: GraduationCap,
    highlights: [
      "AI workshops with 500–2000 students per session",
      "Institutions signing long-term subscriptions"
    ]
  },
  {
    category: "Youth Empowerment",
    icon: Users,
    highlights: [
      "Unemployed youth finding jobs after 30–60 days of AI training"
    ]
  },
  {
    category: "MSME & Startups",
    icon: Building2,
    highlights: [
      "Businesses reporting 40–200% growth through automation"
    ]
  },
  {
    category: "Rural Communities",
    icon: MapPin,
    highlights: [
      "Farmers trained in AI tools for agriculture",
      "Natural farming promotion"
    ]
  },
  {
    category: "Women Empowerment",
    icon: Star,
    highlights: [
      "Homemakers turning into digital freelancers"
    ]
  },
  {
    category: "Government Collaborations",
    icon: Trophy,
    highlights: [
      "Leaders aligning with Digital India and Skill India missions"
    ]
  }
];

const impactNumbers = [
  { number: "10,000+", label: "Students Trained" },
  { number: "500+", label: "Workshops Conducted" },
  { number: "100+", label: "Institutions Partnered" },
  { number: "50+", label: "Villages Impacted" }
];

export default function TestimonialsSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="testimonials-master" id="testimonials">

      {/* SECTION 1: Opening - White Background */}
      <div className="testimonials-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">THE PROOF OF IMPACT: TRANSFORMATION ACROSS DISTRICTS, CITIES & VILLAGES</h2>
            <h3 className="section-subtitle dark">When Purpose Meets AI, Magic Happens.</h3>

            <div className="opening-statement">
              <Quote className="quote-icon" />
              <p className="statement-main dark">
                "A system is only as powerful as the lives it transforms."
              </p>

              <div className="transformation-text">
                <p className="transform-line dark">
                  And the Nitai AI & Digital Empire ecosystem is transforming
                </p>
                <p className="transform-line emphasis dark">
                  students, businesses, farmers, women, youth, villages, cities, and entire districts.
                </p>
                <p className="transform-line dark">
                  Below are <strong className="gold-text">REAL examples</strong> of how Nitai has already changed thousands of lives —
                </p>
                <p className="transform-line dark">
                  and what you can replicate in <strong className="gold-text">YOUR region</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Element */}


        <div className="geometric-shapes">
          <motion.div
            className="shape shape-1"
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 18, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 2: Success Stories - Navy Blue Background */}
      <div className="testimonials-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">🏆 MAJOR SUCCESS STORIES</h2>

            <div className="stories-grid">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="story-card"
                >
                  {/* Image Box */}
                  <div className="story-image-box" style={{ background: `linear-gradient(135deg, ${story.color}40, ${story.color}20)` }}>
                    <div className="story-image-placeholder">
                      <img src={story.storyImage} alt={story.title} />
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-title-group">
                      <h3 className="story-title">{story.title}</h3>
                      <p className="story-tagline">"{story.tagline}"</p>
                    </div>

                    <div className="story-achievements">
                      <h4 className="achievements-title">Transformations Achieved:</h4>
                      <ul className="achievements-list">
                        {story.achievements.map((achievement, i) => (
                          <li key={i} className="achievement-item">
                            <CheckCircle2 className="check-icon" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="story-impact">
                      <p className="impact-text">{story.impact}</p>
                    </div>

                    <div className="story-quote">
                      "{story.quote}"
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

      {/* SECTION 3: Impact Categories - White Background */}
      <div className="testimonials-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">📌 IMPACT ACROSS INDIA</h2>
            <p className="impact-intro dark">Real transformation snapshots:</p>

            <div className="impact-grid">
              {impactCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="impact-card"
                >
                  <div className="impact-icon-wrapper">
                    <category.icon className="impact-icon" />
                  </div>
                  <h3 className="impact-category">{category.category}</h3>
                  <ul className="impact-highlights">
                    {category.highlights.map((highlight, i) => (
                      <li key={i} className="impact-highlight">• {highlight}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="impact-numbers">
              {impactNumbers.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="number-card"
                >
                  <Award className="number-icon" />
                  <div className="number-value">{item.number}</div>
                  <div className="number-label">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="one-franchise-statement">
              <p className="franchise-text dark">
                "One franchise… <strong className="gold-text">thousands of lives transformed</strong>."
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
      <div className="testimonials-section navy-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <TrendingUp className="cta-trending-icon" />
              <p className="cta-message">
                "These are just a <strong>glimpse</strong> of what's possible."
              </p>
              <p className="cta-imagine">
                Imagine how many lives <strong>YOU</strong> can transform when you lead your region.
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary large"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Start Transforming Lives Now
              </motion.button>

              <p className="cta-scroll">
                "Scroll down — and finalize your decision to join this movement."
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
