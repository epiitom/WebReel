"use client";

import { SessionProvider } from "next-auth/react";
import { ImageKitProvider } from "imagekitio-next";
import { NotificationProvider } from "./Notification";
import { useState, useEffect } from "react";

const getImageKitConfig = () => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  if (!urlEndpoint || !publicKey) {
    console.error('ImageKit configuration is missing:', {
      hasUrlEndpoint: !!urlEndpoint,
      hasPublicKey: !!publicKey
    });
    return null;
  }

  return { urlEndpoint, publicKey };
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [ikConfig, setIkConfig] = useState(getImageKitConfig());

  useEffect(() => {
    // Verify configuration on client side
    const config = getImageKitConfig();
    if (!config) {
      console.error('ImageKit configuration is missing');
    } else {
      setIkConfig(config);
    }
  }, []);

  const authenticator = async () => {
    try {
      const res = await fetch("/api/imagekit-auth");
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to authenticate");
      }
      return res.json();
    } catch (error) {
      console.error("ImageKit authentication error:", error);
      throw error;
    }
  };

  if (!ikConfig) {
    return (
      <SessionProvider refetchInterval={5 * 60}>
        <NotificationProvider>
          <div className="text-center py-8">
            <p className="text-red-500">Configuration Error: ImageKit settings are missing</p>
          </div>
          {children}
        </NotificationProvider>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider refetchInterval={5 * 60}>
      <NotificationProvider>
        <ImageKitProvider
          publicKey={ikConfig.publicKey}
          urlEndpoint={ikConfig.urlEndpoint}
          authenticator={authenticator}
        >
          {children}
        </ImageKitProvider>
      </NotificationProvider>
    </SessionProvider>
  );
}