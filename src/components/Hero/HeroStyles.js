import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const HeroContainer = styled(ContainerStyled)`
    padding: 120px 0;
    background-image: url(/imgs/bg_hero.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(10, 3, 17, 0.5); /* Color sólido con 50% de opacidad */
        z-index: 1; /* Asegura que esté encima de la imagen */
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(10, 3, 17, 0) 0%, rgba(10, 3, 17, 1) 100%);
        z-index: 2; /* Asegura que el degradado esté encima del color sólido */
    }
`

export const HeroWrapper = styled(WrapperStyled)`
    z-index: 3;
`

export const HeroText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    text-transform: uppercase;
    gap: 25px;

    a {
        color: orange;
        text-transform: uppercase;
        font-size: 20px;
    }

    h1 {
        text-align: end;
        width: 90%;
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
`