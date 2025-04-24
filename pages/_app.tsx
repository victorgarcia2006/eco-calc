import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colors: {
          "pine-green": [
            "#edfffc",
            "#c2fff6",
            "#84fff0",
            "#3fffe7",
            "#08f9d9",
            "#00dcc0",
            "#00b29f",
            "#008d80",
            "#00786f",
            "#065b54",
            "#003836",
          ],
        },
        primaryColor: "pine-green",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
