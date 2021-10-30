import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: Roboto, sans-serif;
    }

    html {
        width: 100vw !important;
    }

    body {
        line-height: 1;
        background-color: #f4f4f4;
    }

    ul, ol {
        list-style: none;
    }

    input {
        outline: none;

        &:focus {
            outline-style: none;
            box-shadow: none;
        }
        
        &:disabled {
            color: #000;
            background-color: transparent;
            cursor: not-allowed;
        }
    }
`