import "./OutletCSS.scss";

export default function Resume() {
  return (
    <div className="resume-section">
      <h1 className="resume-title">📄 Resume and Certificate</h1>

      <div className="resume-wrapper">
        <div>
          <strong>Resume</strong>
          <a
            href="https://drive.google.com/file/d/1rqXs34g4jk8c6JdQ_vRSBUBJaWevWnRh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my CV (PDF)
          </a>
        </div>
        <div>
          <strong>Full Stack Developer Certificate</strong>
          <a
            href="https://drive.google.com/file/d/13mDAbM04BNnDDGY8oBgI9NO4NyfgGJ02/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
