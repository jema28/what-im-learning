import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { color, typography } from './index'

const { primary, white } = color
const { font } = typography

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Darker+Grotesque|Karla:700&display=swap')
  ${normalize()};

  html {
    box-sizing: border-box;
  }

  *, *:before,*:after {
    box-sizing: inherit;
  }


  body {
    margin: 0;
    padding: 0;
    background: ${primary};
    color: ${white};
    ${font.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, a {
    margin: 0;
    padding: 0;
    ${font.heading};
  }
`
