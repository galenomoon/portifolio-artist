import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="og:title"
          content={
            "Guilherme Galeno 💛🌎 | No Spotify e em outras plataformas digitais"
          }
        />
        <meta name="og:image" content="/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Galenomoon" />
        <meta
          name="description"
          content={"Guilherme Galeno 💛🌎 | No Spotify e em outras plataformas digitais"}
        />
        <meta
          name="og:description"
          content={"Guilherme Galeno 💛🌎 | No Spotify e em outras plataformas digitais"}
        />
        <meta name="og:url" content="https://www.galenomoon.com" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
