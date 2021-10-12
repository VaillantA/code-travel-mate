import './style.scss';

const Contact = () => (
  <div className="contactPage">
    <h1 className="contactPage--text">
      Contactez-nous
    </h1>
    <form
      className="contactForm"
      action="https://formsubmit.co/b56675639b1132fd3a633c015c362ef5"
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
      <input type="hidden" name="_next" value="http://localhost:8080/"></input>
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
