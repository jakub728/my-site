import "./OutletCSS.scss";

export default function Contact() {
  return (
    <section className="contact-section">
      <h1>💬 Contact</h1>
      <p>If you'd like to get in touch, feel free to send me an email:</p>
      <p>
        📧 Email:{" "}
        <a
          href="mailto:sulisz.jakub@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          sulisz.jakub@gmail.com
        </a>
      </p>
      <p>
        📞 Phone: <a href="tel:+48604603066">+48 604 603 066</a>
      </p>
    </section>
  );
}
