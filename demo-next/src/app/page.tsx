import Image from "next/image";
import Zoho from "@/components/Zoho";
import Script from "next/script";
import Head from "next/head";
import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
    {/* <Head>
        <Script
          src="https://js.zohostatic.com/creator/widgets/version/1.0/widgetsdk-min.js"
          strategy="beforeInteractive"
        />
      </Head> */}
      <div className="">
        {/* <Zoho /> */}
        <Slider></Slider>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-50">
          <h2 className="text-2xl">Featured Products</h2>
          <ProductList></ProductList>
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-50">
          <h2 className="text-2xl"> Categories </h2>
         
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-50">
          <h2 className="text-2xl">New Products</h2>
          <ProductList></ProductList>
        </div>
      </div>
    </>

  );
}
