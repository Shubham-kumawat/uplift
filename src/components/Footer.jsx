import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="">User Interface</a>
            </li>
            <li>
              <a href="">User Experience</a>
            </li>
            <li>
              <a href="">Digital Media</a>
            </li>
            <li>
              <a href="">Lifestyle</a>
            </li>
            <li>
              <a href="">Programming</a>
            </li>
            <li>
              <a href="">Animation</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4> Product</h4>
          <ul>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">Browse</a>
            </li>
            <li>
              <a href="">Accessibility</a>
            </li>
            <li>
              <a href="">Five</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4> Solutions</h4>
          <ul>
            <li>
              <a href="">Brainstorming</a>
            </li>
            <li>
              <a href="">Ideation</a>
            </li>
            <li>
              <a href="">Wireframing</a>
            </li>
            <li>
              <a href="">Research</a>
            </li>
            <li>
              <a href="">Design</a>
            </li>
            <li>
              <a href="">Concept</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4> Resources</h4>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Tutorials</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4> Support</h4>
          <ul>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Integrations</a>
            </li>
            <li>
              <a href="">Reports</a>
            </li>
            <li>
              <a href="">Webinar</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4> Company</h4>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Customers</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
        <h3>
          break<span className="span">io</span>
        </h3>
          <p>© 2025 - All rights reserved.</p>

        </div>
        <div className="social-icons">
          <a href="https://youtube.com">
            <img src="src\assets\icons\youtube.png" alt="" />
          </a>
          <a href="https://twitter.com">
            <img src="src\assets\icons\Twitter.png" alt="" />
          </a>
          <a href="https://facebook.com">
            <img src="src\assets\icons\facebook.png" alt="" />
          </a>

          <a href="https://instagram.com">
            <img src="src\assets\icons\instagram.png" alt="" />
          </a>
          <a href="https://linkedin.com">
            <img src="src\assets\icons\linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
