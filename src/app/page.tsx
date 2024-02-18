import Head from "next/head";
import Image from "next/image";

// test hey
export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Sigil TV</title>
        <meta name="description" content="Sigil TV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://player.twitch.tv/?channel=sigilw&parent=www.sigil.tv&parent=sigil.tv&parent=localhost&autoplay=true"
          frameBorder="0"
          allowFullScreen={true}
          scrolling="no"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.twitch.tv/embed/sigilw/chat?parent=www.sigil.tv&parent=sigil.tv&parent=localhost"
          frameBorder="0"
          scrolling="no"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </main>
  );
}
