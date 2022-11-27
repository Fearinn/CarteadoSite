import StyledContact from "./styles";
;

function Contact() {
  return (
    <StyledContact>
      <address>
      <p>For feedback, business inqueries or just questions, feel free to contact us in any of our social medias, listed below.</p>
        <div className="contact-container">
          <img src="/images/email-svgrepo-com.svg" alt="" width={24} height={24} />
          <a href="mailto:contact@carteados.com">contact@carteados.com</a>
        </div>
        <div className="contact-container">
          <img src="/images/discord.svg" alt="" width={24} height={24} />
          <a href="https://discord.com/invite/e23kfK9QcS">SHSuperSonic#0982</a>
        </div>
        <div className="contact-container">
          <img src="/images/twitter.svg" alt="" width={24} height={24} />
          <a href="https://twitter.com/Carteados">@Carteados</a>
        </div>
      </address>
      <img src="/images/Star-Light-Series-banner.webp" alt="" width={400} height={225} ></img>
    </StyledContact>
  );
}

export default Contact;
