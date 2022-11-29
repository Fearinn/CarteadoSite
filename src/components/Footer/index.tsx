import StyledFooter from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer__logo"></div>
      <div className="footer__disclaimers">
        <p className="footer__disclaimer" id="copyright">
          Carteado Challenges - All rights reserved.
        </p>
        <p className="footer__disclaimer">
          All product names, logos, brands and trademarks are property of their
          respective owners.
        </p>
        <p className="footer__disclaimer">
          Carteado Challenges is not directly endorsed by The Pokémon Company or
          by any partner.
        </p>
        <p className="footer__disclaimer">
          <a href="https://www.privacypolicygenerator.info/live.php?token=W172M0HiI0Xq891tLdnXVIuYuNk9rENj">
            Privacy Policy
          </a>
        </p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
