import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="og:title"
          content={
            "Galenomoon - Fullstack Developer: Showcasing Programming Skills and Expertise"
          }
        />
        <meta name="og:image" content="/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Galenomoon" />
        <meta
          name="description"
          content={
            "Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities."
          }
        />
        <meta
          name="og:description"
          content={
            "Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities."
          }
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
