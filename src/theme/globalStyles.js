import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${ props => props.theme.bodyFont };
    background: ${ props => props.theme.background };
    color: ${ props => props.theme.textColor };
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${ props => props.theme.headerFont };
    color: ${ props => props.theme.headerColor };
    font-weight: 400;
    font-style: normal;
    margin-right: 0;
    margin-left: 0;
    margin-top: 0;
  }
  p, ul {
    line-height: 22px;
    font-size: 13px
  }
  @media (min-width: 700px) {
    p, ul {
      line-height: 25px;
      font-size: 16px
    }
  }
  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  a {
    background-color: transparent;
    color: ${ props => props.theme.primary };
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
`

export const theme = {
  primary: '#ffb8a7',
  secondary: '#fee0be',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#222',
  background: '#ffffff',
  textColor: '#717171',
  headerColor: '#232323',
  headerFont: `"Playfair Display", serif`,
  bodyFont: `"Lucida Grande", sans-serif`,
}
