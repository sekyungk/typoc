import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    src: url("/fonts/Roboto-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
    unicode-range: U+AC00-D7A3;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
