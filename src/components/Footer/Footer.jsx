import { personal } from "../../data/personal";
import "../../styles/footer.css";

export default function Footer() {
  const careerLinks = [
    ["About Me", "#about"],
    ["Services", "#services"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  const serviceLinks = [
    "React.js Development",
    "MERN Stack Development",
    "Frontend UI Development",
    "Responsive Web Development",
    "SEO Optimization",
    "Website Performance",
  ];

  return (
    <footer className="pf-footer">

      {/* ================= MAIN FOOTER ================= */}
      <div className="pf-footer-main">

        {/* ================= BRAND ================= */}
        <div className="pf-brand">

          <a href="#home" className="pf-logo">
            AP
          </a>

          <h3>{personal.name}</h3>

          <p>
            React.js Developer × MERN Stack × SEO.
            Building modern, responsive and
            performance-focused web experiences.
          </p>

          <div className="pf-socials">

            <a
              href="https://github.com/AbhishekPandey89"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-pandey-b57523242/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
            >
              @
            </a>

          </div>

        </div>


        {/* ================= CAREER ================= */}
        <div className="pf-column">

          <h4>Career</h4>

          {careerLinks.map(([label, link]) => (
            <a href={link} key={link}>
              <span>↗</span>
              <span className="pf-link-text">{label}</span>
            </a>
          ))}

        </div>


        {/* ================= SERVICES ================= */}
        <div className="pf-column">

          <h4>Services</h4>

          {serviceLinks.map((service) => (
            <a href="#services" key={service}>
              <span>↗</span>
              <span className="pf-link-text">{service}</span>
            </a>
          ))}

        </div>


        {/* ================= CONTACT ================= */}
        <div className="pf-column pf-contact">

          <h4>Contact</h4>

          <p>
            Looking for a developer for your website,
            product or business idea? Let's build
            something great together.
          </p>

          <a href={`tel:${personal.phone}`}>
            ☎ +91 {personal.phone}
          </a>

          <a href={`mailto:${personal.email}`}>
            ✉ {personal.email}
          </a>

          <span>
            📍 New Delhi / Noida · India
          </span>

          <a href="#contact" className="pf-cta">
            <span>Start a conversation</span>
            <span>→</span>
          </a>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="pf-bottom">

        <span>
          © {new Date().getFullYear()} {personal.name}
        </span>

        <span className="pf-stack">
          React · MERN · SEO
        </span>

        <a href="#home">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}