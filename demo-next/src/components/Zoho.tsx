import Image from "next/image";
import useZohoSDK from "@/app/zohoInit";

export default function Zoho() {
  useZohoSDK();

  return <div>Zoho SDK Example</div>;
}