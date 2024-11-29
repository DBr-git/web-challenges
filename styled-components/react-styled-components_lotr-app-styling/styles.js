import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-family: ${lora.style.fontFamily};

    --headline1-size: 44px;
    --headline1-weigth: bold;
    --headline1-line-height: 48px;

    --dark-background: #282828;
    --dark-primary: #D4D1CD;
    --dark-secondary: #F1F1F1;
    --light-background: #F1F1F1;
    --light-primary: #282828;
  }

  body {
    font-family: system-ui;
  }
`;
