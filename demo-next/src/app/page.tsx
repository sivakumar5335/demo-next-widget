import Image from "next/image";
import Zoho from "@/components/Zoho";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <Script
          src="https://js.zohostatic.com/creator/widgets/version/1.0/widgetsdk-min.js"
          strategy="beforeInteractive"
        />
      </Head>
      <div className="">
        <Zoho />
      </div>
    </>

  );
}
