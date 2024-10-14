import { createGlobalStyle } from "styled-components"
import { FontStyles } from './fonts';  // Importa el archivo de fuentes

export const GlobalStyles = createGlobalStyle`
    :root {
        --bg: #0A0311;
        --white: #F4E5D4;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Dunbar Tall', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--bg);
        color: var(--white)
    }
    img {
        user-select: none;
    }

    h1 {
        font-size: 11.8vh;
        line-height: 90%;

        @media (max-width: 768px) {
        }

        @media (max-width: 468px) {
        }
    }
`


