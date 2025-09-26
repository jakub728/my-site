import "./OutletCSS.scss";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Links() {
  return (
    <section className="links-section">
      <h1>📸 My socials:</h1>

      <div className="link-wrapper">
        <ul>
          <li>
            <strong>
              <FaFacebook className="icon" />
              Facebook:
            </strong>
            <a
              href="https://www.facebook.com/jakub.sulisz"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/jakub.sulisz
            </a>
          </li>
          <li>
            <strong>
              <FaGithub className="icon" />
              GitHub:
            </strong>
            <a
              href="https://github.com/jakub728"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/jakub728
            </a>
          </li>
          <li>
            <strong>
              <FaLinkedin className="icon" />
              LinkedIn:
            </strong>{" "}
            <a
              href="https://www.linkedin.com/in/jakub-sulisz-5a1660368"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/jakub-sulisz
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
