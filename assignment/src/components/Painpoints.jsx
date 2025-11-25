import React from "react";
import "./painpoints.css";
//eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

export default function PainPoints() {
return (
<section className="pp-section">
<div className="pp-container">
<h2 className="pp-title">THE PAIN POINTS</h2>
<p className="pp-subtitle">Talking to the Inner Mind of the Reader</p>


<div className="pp-list">
<div className="pp-item">
<h3>1️⃣ Income Gap</h3>
<p>Salaries not growing. Inflation rising. Expenses increasing. No stability.</p>
</div>


<div className="pp-item">
<h3>2️⃣ Job Crisis</h3>
<p>AI is replacing tasks. Companies need fewer employees. The traditional job market is evaporating.</p>
</div>


<div className="pp-item">
<h3>3️⃣ Digital Divide</h3>
<p>Cities are growing… but districts & villages are still waiting for opportunities.</p>
</div>


<div className="pp-item">
<h3>4️⃣ Youth Without Direction</h3>
<p>Millions are confused, unskilled, unemployed.</p>
</div>


<div className="pp-item">
<h3>5️⃣ MSME & Businesses Struggling</h3>
<p>They know they need digital transformation — but they don’t know where to start.</p>
</div>


<div className="pp-item">
<h3>6️⃣ Leaders Without a System</h3>
<p>People want to lead… but they lack Tools, Training, Team, Network, System, Support.</p>
</div>
</div>


<div className="pp-highlight">
<p>“This gap is not a challenge. This gap is your opportunity.”</p>
</div>
</div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-cta-row"
        >
          <motion.button
  whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(255, 204, 102, 0.6)" }}
  whileTap={{ scale: 0.97 }}
  className="learn-btn primary"
  onClick={() => window.open("https://lp.nitaigroup.com/webinar-leads", "_blank")}
>
  Apply Now
</motion.button>
        </motion.div>
</section>
);
}