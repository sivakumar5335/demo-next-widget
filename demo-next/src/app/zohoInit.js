"use client"; // Ensures this runs only on the client side

import { useEffect } from "react";

const useZohoSDK = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ZOHO) {
      window.ZOHO.CREATOR.init().then(() => {
        console.log("Zoho SDK Initialized");
      });
    } else {
      console.error("Zoho SDK not loaded.");
    }
  }, []);
};

export default useZohoSDK;
