import styled from "styled-components";
import { colors } from "styles/globalsCSS";

const StyledFooter = styled.footer`
display: flex;
align-items: center;
background-color: ${colors.backgroundBase};
padding: 1rem;

    .footer__logo {
        background: url('/images/CarteadoLogo2.webp') center / 100% no-repeat;
        height: 120px;
        margin-right: 1rem;
        min-width: 100px;
        text-align: center;
    }

    .footer__disclaimers {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .footer__disclaimer {
            font-size: 0.975rem;
            margin-bottom: 1rem;

            &:last-child {
                margin: 0;
            }

        }

        #copyright::before {
            content: '\24B8';
            margin-right: 0.1rem;

        }

    }
`;

export default StyledFooter;
