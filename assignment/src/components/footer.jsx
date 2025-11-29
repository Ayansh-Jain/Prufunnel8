import { SiLinkedin, SiFacebook, SiInstagram, SiX } from "react-icons/si";
import "./footer.css";
//eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

export default function Footer() {
  const handleSocialClick = (platform) => {
    console.log(`${platform} clicked`);
  };

  return (
    <footer className="ft-section">
      <div className="ft-container">
        <div className="ft-grid">

          {/* BRAND + SOCIAL */}
          <div className="ft-brand">
            <h3 className="ft-title">NITAI AI & DIGITAL EMPIRE</h3>
            <p className="ft-description">
              Empowering entrepreneurs to build sustainable digital empires
              through AI technology and spiritual wisdom.
            </p>

            <div className="ft-socials">
              <button className="ft-social-btn" onClick={() => handleSocialClick("LinkedIn")}>
                <SiLinkedin className="w-5 h-5" />
              </button>
              <button className="ft-social-btn" onClick={() => handleSocialClick("Facebook")}>
                <SiFacebook className="w-5 h-5" />
              </button>
              <button className="ft-social-btn" onClick={() => handleSocialClick("Instagram")}>
                <SiInstagram className="w-5 h-5" />
              </button>
              <button className="ft-social-btn" onClick={() => handleSocialClick("X")}>
                <SiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="ft-links-block">
            <h4 className="ft-links-title">Quick Links</h4>
            <div className="ft-links-list">
              <li><a className="ft-link" href="https://www.nitaigroup.com/quick-links/nitai-world">Nitai World</a></li>
              <li><a className="ft-link" href="https://www.nitaigroup.com/quick-links/nitai-empire">Nitai Empire</a></li>
              <li><a className="ft-link" href="https://www.nitaigroup.com/quick-links/waio">World AI Organization</a></li>
              <li><a className="ft-link" href="https://www.nitaigroup.com/quick-links/wdc">World Development Council</a></li>
              <li><a className="ft-link" href="https://www.nitaigroup.com/quick-links/wfa">World Farmers Association</a></li>
              <li><a className="ft-link" href="https://www.nitaigroup.com/quick-links/nic">Incubation Centers</a></li>
            </div>
          </div>

          {/* LEGAL */}
          <div className="ft-links-block">
            <h4 className="ft-links-title">Legal</h4>
            <div className="ft-links-list">
              <li><a href="/privacy-policy" className="ft-link">Privacy Policy</a>
</li>
              <li>
  <a href="/terms" className="ft-link">Terms & Conditions</a>
</li>

              <li><a className="ft-link" href="#disclaimer">Disclaimer</a></li>
           </div>
          </div>

          {/* CONTACT */}
          <div className="ft-links-block">
            <h4 className="ft-links-title">Get in Touch</h4>
            <div className="ft-links-list">
              <li><a className="ft-link" href="mailto:info@nitai.com">nitaigroup.12@gmail.com</a></li>
              <li><a className="ft-link" href="tel:+919340952324">9340952324</a></li>
              <li><a className="ft-link">International Head Quater 29 , Umari , Village Umari , Damoh MP Bharat 470661</a></li>
            </div>
          </div>

        </div>

        <div className="ft-bottom">
          <p>
            &copy; {new Date().getFullYear()} NITAI AI & Digital Empire.All rights reserved. Serving Humanity Universally - Physically, Mentally, Socially, Economically & Spiritually.
          </p>

          <p className="ft-powered">
            Powered by <a 
      href="https://shrivastavaprofunnels.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="ft-gold"
    >
      MyProFunnels
    </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
