import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="Contact-Grid">
        <div>
          <h1>Contact</h1>
        </div>
        <div className="Contact-List">
          <h3>Contact me through Email</h3>
          <a
            href="mailto: 456theochang@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="Contact-Email-Link"
          >
            <h3 className="My-Email">456theochang@gmail.com</h3>
          </a>
          <br />
          <h3>Contact me through Linkedin</h3>
          <a
            href="https://www.linkedin.com/in/theodore-chang-5a529b176/"
            rel="noreferrer"
            className="Contact-Linkedin-Link"
          >
            <h3 className="My-Linkedin">Direct Linkedin Account</h3>
          </a>
        </div>
      </div>
      <div className="Resume-Grid">
        <a
          className="Resume-Link"
          href="https://docs.google.com/document/d/1f3Nr7tSpUoi24eXcQwgrqSLndTL32LRJ/edit"
          rel="norefferer"
        >
          Click to Download Resume
        </a>
      </div>
    </>
  );
}

export default Contact;
