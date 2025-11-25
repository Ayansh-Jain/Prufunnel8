import React from "react";
import "./terms.css";
import Footer from "./footer";
import CustomCursor from "./cursor";

export default function Terms() {
  return (
    <>
    <CustomCursor/>
    <section className="terms-section">
        
        <h1 className="terms-title">Terms & Conditions (T&C)</h1>
      <div className="terms-container">

        
  

        {/* CARD 1 */}
        <div className="terms-card">
          <h3>1. Franchise Rights & Territory Protection</h3>
          <ul>
            <li>Only ONE SMF per state</li>
            <li>Only THREE DMF per district</li>
            <li>Exclusivity granted after final approval</li>
            <li>Rights are non-transferable without permission</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="terms-card">
          <h3>2. Payment & Registration Policy</h3>
          <ul>
            <li>₹1200 seat booking = mandatory</li>
            <li>Full payment required after approval</li>
            <li>Digital receipts & agreements provided</li>
            <li>No hidden charges</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="terms-card">
          <h3>3. Refund Policy</h3>
          <p className="gold-text">Refundable only if:</p>
          <ul>
            <li>Not selected</li>
            <li>Seat unavailable</li>
            <li>Seat change</li>
            <li>System not ready (rare)</li>
          </ul>

          <p className="gold-text">Non-refundable once:</p>
          <ul>
            <li>Training is accessed</li>
            <li>Bonuses are downloaded</li>
            <li>Agreement is signed</li>
          </ul>
        </div>

        {/* CARD 4 */}
        <div className="terms-card">
          <h3>4. Training & Resource Usage Policy</h3>
          <ul>
            <li>White-label rights for your region only</li>
            <li>Resale outside region prohibited</li>
            <li>Assets cannot be sold separately</li>
          </ul>
        </div>

        {/* CARD 5 */}
        <div className="terms-card">
          <h3>5. Brand & Compliance Policy</h3>
          <ul>
            <li>Must use NITAI brand guidelines</li>
            <li>No misuse of brand name</li>
            <li>No fake claims/misrepresentation</li>
            <li>Ethical operations mandatory</li>
          </ul>
        </div>

        {/* CARD 6 */}
        <div className="terms-card">
          <h3>6. Territory Performance Rule</h3>
          <p>If a franchise is inactive for 3+ months, NITAI may:</p>
          <ul>
            <li>Provide intensive support</li>
            <li>Assign co-leadership</li>
            <li>Replace franchise (very rare)</li>
          </ul>

          <p className="gold-text">
            Goal: Ensure district/state progress at all times.
          </p>
        </div>

      </div>
      <Footer/>
    </section>
    </>
  );
}
