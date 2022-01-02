import { createGlobalStyle } from "styled-components"
import background from '../images/background.png'

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: url(${background});
        color: #eaeaea;
    }
`
