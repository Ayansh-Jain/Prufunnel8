import React from "react";
import "./impact.css";
//eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

export default function ImpactPage() {
  return (
    <section className="impact-section">
      <div className="impact-container">

        <h2 className="impact-title">
          THE PROOF OF IMPACT: TRANSFORMATION ACROSS DISTRICTS, CITIES & VILLAGES
        </h2>
        <p className="impact-subtitle">When Purpose Meets AI, Magic Happens.</p>

        {/* CARD 1 */}
        <div className="impact-card">
          <div className="impact-img-box">
            <img src="https://storage.googleapis.com/msgsndr/apKMu3qn3I2DsE3EQiOK/media/691df495300f0607407facc5.jpg" alt="World AI Summit" />
          </div>
          <div className="impact-content">
          <h3>WORLD AI SUMMIT — INDIA</h3>
          <p className="impact-quote">“From a district initiative to a global intellectual platform.”</p>
          <ul>
            <li>AI Researchers</li>
            <li>Innovators</li>
            <li>Educators</li>
            <li>Entrepreneurs</li>
            <li>Policy Makers</li>
          </ul>
          <p className="impact-highlight">“When your ecosystem hosts global summits… trust flows automatically.”</p>
        </div></div>

        {/* CARD 2 */}
        <div className="impact-card">
          <div className="impact-img-box">
            <img src="https://storage.googleapis.com/msgsndr/apKMu3qn3I2DsE3EQiOK/media/691df49559e47b317748d660.jpg" alt="Smart Village Umari" />
          </div>
         <div className="impact-content">
          <h3>NITAI IDEAL SMART VILLAGE — UMARI (DAMOH)</h3>
          <p className="impact-quote">“India’s first AI + Agriculture + Social Development village model.”</p>
          <ul>
            <li>100% digital awareness</li>
            <li>Skill development for women & youth</li>
            <li>Support for natural farming</li>
            <li>Rural AI training</li>
            <li>Community empowerment events</li>
            <li>Zero beggary model (pilot)</li>
          </ul>
          <p className="impact-highlight">
            “If one village can become smart… a whole district can become unstoppable.”
          </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="impact-card">
          <div className="impact-img-box">
            <img src="https://storage.googleapis.com/msgsndr/apKMu3qn3I2DsE3EQiOK/media/691df495c03e0f9c93cb0d8e.jpg" alt="Damoh Digital Transformation" />
          </div>
     <div className="impact-content">
          <h3>DAMOH DIGITAL TRANSFORMATION PROJECT</h3>
          <p className="impact-quote">“A district-level model for AI & digital skill penetration.”</p>
          <ul>
            <li>AI skill programs for youth</li>
            <li>School & college workshops</li>
            <li>MSME digital adoption drives</li>
            <li>Digital literacy camps</li>
            <li>Government partnership meetings</li>
            <li>Community awareness programs</li>
          </ul>
          <p className="impact-highlight">“Your district can be next.”</p>
        </div></div>

        {/* CARD 4 */}
        <div className="impact-card">
          <div className="impact-img-box">
            <img src="https://storage.googleapis.com/msgsndr/apKMu3qn3I2DsE3EQiOK/media/691df495f05eaf071222a69f.jpg" alt="Sagar Smart City" />
          </div>
    <div className="impact-content">

          <h3>SAGAR SMART CITY ALIGNMENT</h3>
          <p className="impact-quote">“Digital + AI integration with city development.”</p>
          <ul>
            <li>Students trained in AI</li>
            <li>Startups guided</li>
            <li>Women empowered</li>
            <li>Skill centers activated</li>
            <li>Community projects implemented</li>
          </ul>
          <p className="impact-highlight">“Cities grow when leaders take initiative.”</p>
        </div>
</div>
        {/* CARD 5 */}
        <div className="impact-card">
          <div className="impact-img-box">
            <img src="https://storage.googleapis.com/msgsndr/apKMu3qn3I2DsE3EQiOK/media/691df495c03e0f5714cb0d8f.jpg" alt="Nationwide Success Stories" />
          </div>
    <div className="impact-content">

          <h3>MAJOR SUCCESS STORIES ACROSS INDIA</h3>
          <ul>
            <li><strong>Schools & Colleges:</strong> AI workshops with 500–2000 students/session.</li>
            <li><strong>Youth Empowerment:</strong> Jobs within 30–60 days of AI training.</li>
            <li><strong>MSME:</strong> 40–200% business growth via automation.</li>
            <li><strong>Rural Communities:</strong> AI tools + natural farming.</li>
            <li><strong>Women:</strong> Homemakers → Digital freelancers.</li>
            <li><strong>Govt Collaborations:</strong> Supports Digital India & Skill India.</li>
          </ul>
          <p className="impact-highlight">“One franchise… thousands of lives transformed.”</p>
        </div>
      </div>
      </div>
      <motion.button
  whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(255, 204, 102, 0.6)" }}
  whileTap={{ scale: 0.97 }}
  className="learn-btn primary"
  onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
>
  Apply Now
</motion.button>
    </section>
  );
}
