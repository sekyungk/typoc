import { createGlobalStyle, ThemeProvider } from "styled-components";
import { resetStyle } from "../styles/resetStyle";

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-v27-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('/fonts/roboto-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/roboto-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('/fonts/roboto-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/roboto-v27-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/roboto-v27-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('/fonts/roboto-v27-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/roboto-v27-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/roboto-v27-latin-700.woff') format('woff'), /* Modern Browsers */
         url('/fonts/roboto-v27-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/roboto-v27-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    unicode-range: U+AC00-D7A3;
    font-weight: 400;
    src: url('/fonts/noto-sans-kr-v13-korean-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('/fonts/noto-sans-kr-v13-korean-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/noto-sans-kr-v13-korean-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/noto-sans-kr-v13-korean-regular.woff') format('woff'), /* Modern Browsers */
         url('/fonts/noto-sans-kr-v13-korean-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/noto-sans-kr-v13-korean-regular.svg#NotoSansKR') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    unicode-range: U+AC00-D7A3;
    font-weight: 700;
    src: url('/fonts/noto-sans-kr-v13-korean-700.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('/fonts/noto-sans-kr-v13-korean-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/noto-sans-kr-v13-korean-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/noto-sans-kr-v13-korean-700.woff') format('woff'), /* Modern Browsers */
         url('/fonts/noto-sans-kr-v13-korean-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/noto-sans-kr-v13-korean-700.svg#NotoSansKR') format('svg'); /* Legacy iOS */
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
