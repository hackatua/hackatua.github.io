import { createGlobalStyle } from "styled-components"
import background from "../../images/background.png"
import hackRegularWebFontWoff from "../../fonts/hack-regular-webfont.woff"
import hackRegularWebFontWoff2 from "../../fonts/hack-regular-webfont.woff2"

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Hack';
        src: url(${hackRegularWebFontWoff2}) format('woff2'),
             url(${hackRegularWebFontWoff}) format('woff');
    }
    
    body {
        margin: 0;
        padding: 0;
        background: #151515 url(${background}) 0 0;
        color: #eaeaea;
        font-family: Hack;
    }
`
