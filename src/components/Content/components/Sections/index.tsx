import StyledSection from "./styles";

import config from "data/en/content.json";
import Contact from "./Contact";

interface ICard {
  title: string;
  content: string;
  link?: string;
  image?: string;
}

const sections = config.sections;

function Sections() {
  return (
    <>
      {sections.map((section, index) => {
        return (
          <StyledSection key={index}>
            <>
              <h2>{section.title}</h2>
              <div className="cards">
                <>
                  {section.cards &&
                    section.cards.map((card: ICard, index) => {
                      return (
                        <div className="card" key={index}>
                          <h3>{card.title}</h3>
                          <p>{card.content}</p>
                          {card.image && (
                            <a
                              target="_blank"
                              href={card.link}
                              rel="noreferrer"
                            >
                              <img
                                src={card.image}
                                width={160}
                                height={90}
                                alt=""
                              ></img>
                            </a>
                          )}
                        </div>
                      );
                    })}
                </>
              </div>
            </>
          </StyledSection>
        );
      })}
      <StyledSection>
        <h2>Contact Us</h2>
        <Contact />
      </StyledSection>
    </>
  );
}

export default Sections;
