import { createGlobalStyle } from "styled-components"
import background from "../../images/background.png"
import hackRegularWebFontWoff from "../../fonts/hack-regular-webfont.woff"
import hackRegularWebFontWoff2 from "../../fonts/hack-regular-webfont.woff2"
import { resetStyles } from "./reset-styles"

export const GlobalStyles = createGlobalStyle`
    ${resetStyles};

    @font-face {
        font-family: 'Hack';
        src: url(${hackRegularWebFontWoff2}) format('woff2'),
             url(${hackRegularWebFontWoff}) format('woff');
    }
    
    body {
        background: #151515 url(${background}) 0 0;
        color: #eaeaea;
        font-family: Hack;
        font-size: 16px;
        line-height: 1.5;
    }
`
