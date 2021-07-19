import { createGlobalStyle, ThemeProvider } from "styled-components";
import { resetStyle } from "../styles/resetStyle";

const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url('https://yds-font.yogiyo.co.kr/Roboto-Regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('https://yds-font.yogiyo.co.kr/Roboto-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('https://yds-font.yogiyo.co.kr/Roboto-Regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/Roboto-Regular.woff') format('woff'), /* Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/Roboto-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('https://yds-font.yogiyo.co.kr/Roboto-Regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url('https://yds-font.yogiyo.co.kr/Roboto-Bold.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('https://yds-font.yogiyo.co.kr/Roboto-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('https://yds-font.yogiyo.co.kr/Roboto-Bold.woff2') format('woff2'), /* Super Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/Roboto-Bold.woff') format('woff'), /* Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/Roboto-Bold.ttf') format('truetype'), /* Safari, Android, iOS */
         url('https://yds-font.yogiyo.co.kr/Roboto-Bold.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    unicode-range: U+AC00-D7A3;
    font-weight: 400;
    src: url('https://yds-font.yogiyo.co.kr/NotoSansKR-Regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Regular.woff') format('woff'), /* Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Regular.otf') format('opentype'), /* Safari, Android, iOS */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Regular.svg#NotoSansKR') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    unicode-range: U+AC00-D7A3;
    font-weight: 700;
    src: url('https://yds-font.yogiyo.co.kr/NotoSansKR-Bold.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Bold.woff2') format('woff2'), /* Super Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Bold.woff') format('woff'), /* Modern Browsers */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Bold.otf') format('opentype'), /* Safari, Android, iOS */
         url('https://yds-font.yogiyo.co.kr/NotoSansKR-Bold.svg#NotoSansKR') format('svg'); /* Legacy iOS */
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
