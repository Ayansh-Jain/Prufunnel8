// Hero.jsx
import './hero.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles, OrbitControls } from "@react-three/drei";
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const isClient = typeof window !== 'undefined';
  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section className="hero-master" id="home" ref={ref}>

      {/* SECTION 1: Main Hero - Navy Blue Background */}
      <div className="hero-section navy-bg">
        <div className="container">
          <div className="hero-layout">
            {/* Left Content */}
            <motion.div
              className="hero-content"
              style={{ y, opacity }}
            >
               <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-badge"
              >
                NITAI AI:Digital Empire Master Franchise Ecosystem
              </motion.div>
              {/* Company Name Showcase */}
             

             

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="main-headline"
              >
                Lead the Future. Build Digital Bharat.
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="sub-headline"
              >
                 Earn ₹1.2 Lakhs to ₹1.2 Crore Per Month in AI Era
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mission-tags"
              >
                <span className="mission-tag">🌟 India AI Mission 2030</span>
                <span className="mission-tag">🌟 Viksit Bharat 2047</span>
                <span className="mission-tag">🌟 Nitai Beggar-Free India</span>
                <span className="mission-tag">🌟 Nitai Ideal Smart Village</span>
              </motion.div>

              <motion.button
                              whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                              whileTap={{ scale: 0.97 }}
                              className="cta-btn1"
                              onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
                            >
                              Apply Now
                            </motion.button>
            </motion.div>

            {/* Right 3D Canvas */}
            <div className="hero-3d">
              <div className="about-3d-wrapper">
                <Canvas className="about-canvas" dpr={[1, 2]}>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
                  <ambientLight intensity={0.9} />
                  <directionalLight position={[3, 2, 1]} intensity={1} />
                  <Sparkles count={140} speed={0.6} size={2.6} color="#FFCC66" opacity={0.65} />

                  <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
                    <Icosahedron args={[1.2, 1]} scale={isMobile ? 2 : 2.3}>
                      <MeshDistortMaterial
                        color="#FFCC66"
                        speed={2}
                        distort={0.35}
                        roughness={0.18}
                        emissive="#FFCC66"
                        emissiveIntensity={0.65}
                        wireframe
                      />
                    </Icosahedron>
                  </Float>
                </Canvas>
              </div>
            </div>
          </div>
        </div>

        {/* Geometric shapes */}
        <div className="geometric-shapes">
          <motion.div
            className="shape shape-1"
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 18, repeat: 999999, ease: "easeInOut" }}
          />
          <motion.div
            className="shape shape-2"
            animate={{ y: [0, 40, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 22, repeat: 999999, ease: "easeInOut" }}
          />
          <motion.div
            className="shape shape-3"
            animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
            transition={{ duration: 20, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 2: High-Ticket Hero - White Background */}
      <div className="hero-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content1 centered"
          >
            
            
            <div>
              
              <br />
              <br /><br />
            <h2 className="section-title dark">Become the Master of AI in Your Region.</h2>
            <h3 className="section-subtitle dark">Build Your Own AI & Digital Empire.</h3>
            <p className="income-statement">
              Earn ₹1.2 Lakhs to ₹1.2 Crore / Month — In Full Automation.
            </p>

            <div className="credibility-bar">
              <div className="cred-item">
                <span className="cred-number">12</span>
                <span className="cred-label">Sectors</span>
              </div>
              <div className="cred-item">
                <span className="cred-number">100+</span>
                <span className="cred-label">Projects</span>
              </div>
              <div className="cred-item">
                <span className="cred-number">12,000+</span>
                <span className="cred-label">Students</span>
              </div>
            </div>
            </div>
            
          </motion.div>
        </div>

        {/* Floating animations for white section */}
        <div className="geometric-shapes">
          <motion.div
            className="shape shape-4"
            animate={{ y: [0, -35, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 16, repeat: 999999, ease: "easeInOut" }}
          />
          <motion.div
            className="shape shape-5"
            animate={{ y: [0, 30, 0], x: [0, -25, 0], rotate: [0, 360] }}
            transition={{ duration: 19, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 3: Opening Hook - Navy Blue Background */}
      <div className="hero-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="hook-title">The Questions That Change Everything</h2>
            <div className="hook-questions">
              <p className="hook-question">What if your region looked to <strong>YOU</strong> for AI leadership?</p>
              <p className="hook-question">What if machines worked 24×7 and created income for you…<br />
                while <strong>YOU</strong> focused on serving people, empowering youth, and transforming society?</p>
              <p className="hook-question">And what if you could build a fully automated AI empire…<br />
                from your small town, your district, your city — <strong>starting today?</strong></p>
            </div>
          </motion.div>
        </div>

        <div className="geometric-shapes">
          <motion.div
            className="shape-dot"
            animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 12, repeat: 999999, ease: "easeInOut" }}
          />
          <motion.div
            className="shape-dot"
            animate={{ y: [0, 25, 0], x: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 14, repeat: 999999, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </div>

      {/* SECTION 4: The Vision - White Background */}
      <div className="hero-section white-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">The Vision That Changes Everything</h2>
            <p className="vision-intro dark">
              The NITAI AI & Digital Empire Ecosystem is not just a franchise model.<br />
              It is a complete AI-driven societal upliftment mission designed to:
            </p>
            <div className="vision-points">
              <div className="vision-point">✓ Make AI accessible to every home</div>
              <div className="vision-point">✓ Make digital skills universal</div>
              <div className="vision-point">✓ Make youth professionally strong</div>
              <div className="vision-point">✓ Make India a global AI powerhouse</div>
              <div className="vision-point">✓ Turn leaders like you into AI-era transformers</div>
              <div className="vision-point">✓ Create economic, social & spiritual impact at scale</div>
            </div>
          </motion.div>
        </div>
      </div>
    
      {/* SECTION 5: Mission - Navy Blue Background */}
      <div className="hero-section navy-bg">
        <div className='hori'>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title">Mission of the Movement</h2>
            <h3 className="mission-statement">AI for All • AI Everywhere • AI for Good</h3>
            <div className="mission-purpose">
              <p className="purpose-text">"Empower every citizen with the tools of the future."</p>
              <p className="purpose-text">"Make every region financially, digitally, and socially strong."</p>
              <p className="purpose-text">"Build leaders who create leaders."</p>
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
        <img src="./s1.png" alt="" className='horimg'/>
        </div>
      </div>
      
      

      {/* SECTION 6: Why You Are Here - White Background */}
      <div className="hero-section white-bg">
        
        <div className="container">
          <div className='hori'>
          <img src="./s2.jpg" alt="" className='horimg'/>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content"
          >
            <h2 className="section-title dark">Why You Are Here</h2>
            <div className="why-content">
              <p className="why-intro dark">If you're here…</p>
              <div className="why-points">
                <p className="why-point">You already feel the shift happening in the world.</p>
                <p className="why-point">You already know AI is rewriting the rules.</p>
                <p className="why-point">You already want to be far ahead — not running behind.</p>
                <p className="why-point">You already believe you are meant to lead.</p>
              </div>
              <p className="why-conclusion">And deep inside…<br /><strong>You know this is your moment.</strong></p>
            </div>
          </motion.div>
        </div>
        </div>
      </div>

      {/* SECTION 7: Master Franchise Invitation - Navy Blue Background */}
      <div className="hero-section navy-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="section-title">The Master Franchise Invitation</h2>
            <p className="invitation-intro">
              Today, we invite you to join the top 1% AI leaders of India:
            </p>
            <div className="franchise-types">
              <div className="franchise-type">State Master Franchise</div>
              <div className="franchise-type">District Master Franchise</div>
              <div className="franchise-type">City Master Franchise</div>
              <div className="franchise-type">Local Franchise Partner</div>
            </div>
            <p className="invitation-text">
              Become one of the very first to bring AI literacy, AI jobs, AI automation,<br />
              AI services, and AI empowerment to your region.
            </p>
            <p className="scarcity-text">
              <strong>Only a few seats per region.</strong><br />
              When they're gone — they're gone forever.
            </p>
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
            className="shape shape-3"
            animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
            transition={{ duration: 20, repeat: 999999, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* SECTION 8: CTA - White Background */}
      <div className="hero-section white-bg cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-content centered"
          >
            <h2 className="cta-title dark">Your Next Step</h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-cta-row"
            >
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn primary"
                onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
              >
                Apply Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn secondary"
                onClick={() => window.open("https://wa.me/YOUR_WHATSAPP_NUMBER", "_blank")}
              >
                Instant WhatsApp AI Advisor
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn outline"
              >
                Download 20X Value Prospectus
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="webinar-info"
            >
              <p className="webinar-text">Join FREE Sunday Webinar: 11 AM – 1 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="final-quote"
            >
              <p className="quote-text dark">
                "Every revolution needs leaders.<br />
                Today, AI is the revolution.<br />
                <strong>Will your region have a leader — or be left behind?"</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
