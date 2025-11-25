import React from "react";
import "./privay.css";
import CustomCursor from "./cursor";
import Footer from "./footer";

export default function PrivacyPolicy() {
  return (
    <>
    <CustomCursor/>
    <section className="privacy-section">
      <div className="privacy-container">

        {/* HEADER */}
        <h1 className="privacy-title">Privacy Policy & Transparency Statement</h1>
        <p className="privacy-subtitle">
          Your trust is our responsibility. Your privacy is our commitment.
        </p>

        {/* CARD 1 */}
        <div className="privacy-card">
          <h2 className="privacy-card-title">Privacy Policy</h2>
          <div className="privacy-line"></div>

          <ul className="privacy-list">
            <li>Your data is fully protected and remains confidential.</li>
            <li>No personal information is ever shared with third-party companies.</li>
            <li>Data is used strictly for franchise communication and onboarding.</li>
            <li>All processes follow GDPR-aligned privacy controls.</li>
            <li>All payments are 100% secure and encrypted.</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="privacy-card">
          <h2 className="privacy-card-title">Disclaimer</h2>
          <div className="privacy-line"></div>

          <p className="privacy-description">
            NITAI Ecosystem is an AI, Digital, and Social Empowerment initiative.
            While we provide powerful systems, tools, and support, earnings depend on:
          </p>

          <ul className="privacy-list">
            <li>Effort</li>
            <li>Engagement</li>
            <li>Market Demand</li>
            <li>Execution</li>
            <li>Leadership Skills</li>
          </ul>

          <p className="privacy-description">
            NITAI does <strong>not guarantee income</strong>.  
            But we provide everything needed to maximize your potential for success.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="privacy-card">
          <h2 className="privacy-card-title">Final Reassurance & Trust Booster</h2>
          <div className="privacy-line"></div>

          <p className="privacy-highlight-text">
            “This is the safest, clearest, most transparent franchise model in India.”
          </p>

          <p className="privacy-description">
            As a member of the NITAI Empire, you receive access to:
          </p>

          <ul className="privacy-list">
            <li>Full support system</li>
            <li>Proven franchise system</li>
            <li>Dedicated team</li>
            <li>AI-powered tools</li>
            <li>Leadership training</li>
            <li>High-quality templates</li>
            <li>Advanced technology</li>
            <li>Exclusive territory rights</li>
            <li>Massive transformation opportunities</li>
          </ul>

          <p className="privacy-description">
            Everything is built <strong>FOR YOU</strong> and  
            everything is built <strong>WITH YOU</strong>.
          </p>
        </div>

      </div>
      
    </section>
    <Footer/>
    </>
  );
}
