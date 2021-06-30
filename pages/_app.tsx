import { createGlobalStyle, ThemeProvider } from "styled-components";
import { resetStyle } from "../styles/resetStyle";

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    src: url("/fonts/Roboto-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    src: url("/fonts/Roboto-Bold.ttf") format("truetype");
    font-weight: bold;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    src: url("/fonts/NotoSansKR-Bold.otf") format("opentype");
    unicode-range: U+AC00-D7A3;
    font-weight: bold;
  }

  body {
    font-family: "Roboto", "Noto Sans KR", sans-serif;
  }
`;

const theme = {};

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
