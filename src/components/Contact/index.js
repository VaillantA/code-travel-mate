import './style.scss';

const Contact = () => (
  <div className="contactPage">
    <h1 className="contactPage--text">
      Contactez-nous
    </h1>
    <form
      className="contactForm"
      action="https://formsubmit.co/19238f78652c8cf9a7d562f7a73b79d6"
      method="POST">
      <input
        className="contactForm--nameInput"
        type="text"
        name="name"
        placeholder="Entrez votre nom"
        required
      />
      <textarea
        className="contactForm--messageInput"
        rows="5"
        type="message"
        name="message"
        placeholder="Entrez votre message"
        required
      />
      <button
        className="contactForm--button"
        type="submit"
      >
        Send
      </button>
    </form>
  </div>
);

export default Contact;
