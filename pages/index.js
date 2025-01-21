import HomePage from "ece/modules/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Eye Care Expert | EyeGlasses | Sunglasses at you @Doorstop
        </title>
        <meta
          name="description"
          content=" Eye Care Expert | EyeGlasses | Sunglasses at you @Doorstop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
