import { QRCodeSVG } from "qrcode.react";

export default function Projects() {
  const projects = [
    {
      title: "💖 Amorio",
      description:
        "A full-stack dating app inspired by Tinder, built with a Node.js backend, real-time messaging, and geolocation",
      link: "https://amorio-g8q6.onrender.com/",
    },
    {
      title: "🎲 Lotto App",
      description:
        "EuroJackpot number generator with a simple UI and multiple generation options",
      link: "https://lotto-j6xo.onrender.com/results",
    },
    {
      title: "⚽ Sport w TV",
      description:
        "Daily schedule of live sports broadcasts on Polish television stations",
      link: "https://satkurier.pl/category/264/sport-w-polskiej-tv.html",
    },
  ];

  return (
    <div className="projects-section">
      <h1>📱My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                🔗 Check it out
              </a>
            </div>

            <QRCodeSVG
              value={project.link}
              title={project.title}
              size={150}
              fgColor={"#000000"}
              level={"L"}
              minVersion={6}
              imageSettings={{
                src: "https://static.zpao.com/favicon.png",
                x: undefined,
                y: undefined,
                height: 24,
                width: 24,
                opacity: 0,
                excavate: true,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
