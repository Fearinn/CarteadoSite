import useLang from "hooks/useLang";
import StyledFooter from "./styles";

function Footer() {
  const { lang } = useLang();

  const englishText = {
    copyright: "Carteado Challenges - All rights reserved.",
    trademarks: "All product names, logos, brands and trademarks are property of their respective owners.",
    endorsement: "Carteado Challenges is not directly endorsed by The Pokémon Company or by any affiliate.",
    policy: "Privacy Policy."
  }

  const portugueseText = {
    copyright: "Carteado Challenges - Todos os direitos reservados.",
    trademarks: "Todos os nomes de produtos e marcas comerciais são propriedade de seus respectivos donos.",
    endorsement: "O Carteado Challenges não é diretamente endorsado pela The Pokémon Company ou por qualquer afiliado.",
    policy: "Política de Privacidade."

  }

  return (
    <StyledFooter>
      <div className="container">
        <div className="logo"></div>
        <div className="disclaimers">
          <p id="copyright">
            {lang === "ptBr"
              ? portugueseText.copyright
              : englishText.copyright}
          </p>
          <p>
          {lang === "ptBr"
              ? portugueseText.trademarks
              : englishText.trademarks}
          </p>
          <p>
            {lang === "ptBr"
              ? portugueseText.endorsement
              : englishText.endorsement}
          </p>
          <p>
            <a href="https://www.privacypolicygenerator.info/live.php?token=W172M0HiI0Xq891tLdnXVIuYuNk9rENj">
              {lang === "ptBr"
              ? portugueseText.policy
              : englishText.policy}
            </a>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
