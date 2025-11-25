// Revenue.jsx - 120+ Revenue Streams & Sharing Models
import './revenue.css';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, TorusKnot, MeshDistortMaterial, Sparkles, OrbitControls, Sphere } from "@react-three/drei";
import {
  Package,
  Briefcase,
  GraduationCap,
  Calendar,
  Bot,
  Landmark,
  TrendingUp,
  DollarSign,
  Infinity
} from "lucide-react";

const revenueCategories = [
  {
    id: "products",
    title: "AI & Digital PRODUCTS",
    count: "20+ Streams",
    icon: Package,
    color: "#4CAF50",
    streams: [
      "AI tools", "AI chatbots", "AI agents", "AI design systems",
      "AI-written books", "AI marketing kits", "Digital templates",
      "Website templates", "Funnel templates", "Automation scripts",
      "Video scripts", "Productivity tools", "LMS courses",
      "Membership bundles", "AI packaged products", "Branding kits",
      "Digital assets marketplace"
    ],
    quote: "You don't sell products — you sell automation."
  },
  {
    id: "services",
    title: "AI SERVICES & CONSULTING",
    count: "20+ Streams",
    icon: Briefcase,
    color: "#2196F3",
    streams: [
      "AI consulting", "Digital marketing", "Website & funnel building",
      "Social media automation", "Branding & design", "Content creation",
      "AI-driven advertising", "Business automation", "CRM setup",
      "WhatsApp automation", "Lead generation systems", "SEO & content growth",
      "Influencer growth programs", "Personal branding", "AI-based HR systems",
      "Automation retainers", "Digital transformation audits", "Business coaching packages"
    ],
    quote: "When you sell results, people never negotiate the price."
  },
  {
    id: "courses",
    title: "AI COURSES & CERTIFICATIONS",
    count: "30+ Streams",
    icon: GraduationCap,
    color: "#FF9800",
    streams: [
      "AI for Students", "AI for Teachers", "AI for Professionals",
      "AI for Women", "AI for Business Owners", "AI for MSME",
      "AI for Doctors", "AI for Lawyers", "AI for CAs",
      "AI for Govt Officers", "AI for Entrepreneurs", "Robotics Programs",
      "Coding Programs", "Digital Skills", "Freelancing Programs",
      "Career Growth Programs", "Leadership Training", "Soft Skills",
      "Personality Development", "30+ Certificate Courses", "Franchisee Training Programs"
    ],
    quote: "Skills change lives. You become the source of skills for your entire region."
  },
  {
    id: "events",
    title: "AI WORKSHOPS & EVENTS",
    count: "20+ Streams",
    icon: Calendar,
    color: "#9C27B0",
    streams: [
      "District-level workshops", "School events", "College seminars",
      "Corporate training", "Govt department training", "Startup events",
      "MSME AI Camps", "Women empowerment seminars", "Digital literacy drives",
      "Public workshops", "AI Summits", "Mega conferences",
      "Leadership events", "Motivation sessions", "Annual subscription plans",
      "Community meets", "Smart village programs", "AI hackathons"
    ],
    quote: "Every event becomes a revenue engine."
  },
  {
    id: "tools",
    title: "AI TOOLS, AGENTS & ROS",
    count: "10+ Streams",
    icon: Bot,
    color: "#00BCD4",
    streams: [
      "AI Chatbots", "AI Agents", "AI Business Assistants",
      "AI Sales Agents", "AI HR Agents", "AI Marketing Agents",
      "AI Automation Robots", "AI Data Agents", "AI Customer Support Agents"
    ],
    quote: "You sell a robotic workforce that works 24×7."
  },
  {
    id: "govt",
    title: "GOVERNMENT, CSR & GRANTS",
    count: "10+ Streams",
    icon: Landmark,
    color: "#F44336",
    streams: [
      "Skill development projects", "Govt AI literacy programs",
      "CSR + NGO partnerships", "FPO digital transformation",
      "Smart village projects", "Rural school digitalization",
      "Community empowerment", "Youth mission initiatives",
      "Digital India implementation", "Employment guarantee programs"
    ],
    quote: "When you work with government… your impact becomes exponential."
  }
];

const earningPotential = [
  { level: "State Master Franchise", range: "₹5L – ₹50L+ / Month", color: "#D4AF37" },
  { level: "District Master Franchise", range: "₹1L – ₹10L+ / Month", color: "#FFCC66" },
  { level: "City Franchise", range: "₹50K – ₹2L+ / Month", color: "#FFD700" },
  { level: "Local Franchise", range: "₹20K – ₹1L+ / Month", color: "#FFA500" }
];

export default function RevenueStreamsSection() {
  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="revenue-master" id="revenue">

      {/* SECTION 1: Opening - White Background */}
      <div className="revenue-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title dark">HOW YOU EARN — 120+ REVENUE STREAMS BUILT FOR YOUR SUCCESS</h2>
            <h3 className="section-subtitle dark">
              AI Products. AI Services. AI Education. AI Automation. AI Consulting. AI Projects.
            </h3>

            <div className="opening-statement">
              <p className="statement-line dark">
                "If you know how to create value… <strong>money follows</strong>.
              </p>
              <p className="statement-line dark">
                If you have a system that AUTOMATES value creation… <strong>money multiplies</strong>."
              </p>

              <div className="power-statement">
                <p className="power-text dark">This is the power of the Nitai AI & Digital Empire Franchise.</p>
                <p className="power-text dark">You don't depend on ONE income source.</p>
                <p className="power-text emphasis dark">
                  You build <strong className="gold-text">120+ streams of revenue</strong>, all automated,
                  all scalable, all future-proof.
                </p>
              </div>
            </div>

            <div className="badge-120">
              <Infinity className="infinity-icon" />
              <span className="badge-text">120+ Revenue Streams</span>
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

      {/* SECTION 2: 6 Revenue Categories - Navy Blue Background */}
      <div className="revenue-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title centered">THE 6 POWERFUL REVENUE CATEGORIES</h2>

            <div className="categories-grid">
              {revenueCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="category-card"
                >
                  <div className="category-header">
                    <div className="category-icon-wrapper" style={{ background: category.color }}>
                      <category.icon className="category-icon" />
                    </div>
                    <div className="category-title-group">
                      <h3 className="category-title">{category.title}</h3>
                      <span className="category-count">{category.count}</span>
                    </div>
                  </div>

                  <div className="streams-grid">
                    {category.streams.map((stream, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.02 }}
                        className="stream-badge"
                      >
                        ✔ {stream}
                      </motion.div>
                    ))}
                  </div>

                  <div className="category-quote">
                    "{category.quote}"
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

      {/* SECTION 3: Earning Potential - White Background */}
      <div className="revenue-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark centered">🤑 EARNING POTENTIAL</h2>
            <p className="earning-intro dark">Depending on your franchise type:</p>

            {/* India Map Graphic */}
            <div className="india-map-graphic-container">
              <div className="map-wrapper">
                <img src="/map.jpg" alt="India Map Network" className="india-map-image" />
                {/* Spreading Nodes Overlay */}
                <div className="spreading-nodes">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`node node-${i}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: 999999, delay: i * 0.5 }}
                    />
                  ))}
                </div>
              </div>
              <div className="map-caption">
                <span className="caption-text">Spreading Across the Nation</span>
              </div>
            </div>

            <div className="earning-grid">
              {earningPotential.map((earning, index) => (
                <motion.div
                  key={earning.level}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="earning-card"
                >
                  <DollarSign className="earning-icon" style={{ color: earning.color }} />
                  <h3 className="earning-level">{earning.level}</h3>
                  <p className="earning-range" style={{ color: earning.color }}>{earning.range}</p>
                </motion.div>
              ))}
            </div>

            <div className="ocean-statement">
              <p className="ocean-text dark">
                "You don't earn from one stream…<br />
                <strong className="gold-text">you earn from a digital ocean.</strong>"
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
      <div className="revenue-section navy-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <div className="final-cta-content">
              <TrendingUp className="cta-icon" />
              <p className="cta-message">
                "Now that you see <strong>how the money flows</strong>…"
              </p>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary large"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Discover the 20X Value Offer
              </motion.button>

              <p className="cta-scroll">
                "Scroll to discover the offer that gives you 20X more value than what you pay."
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
