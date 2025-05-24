import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/Provider";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reelsit - Video Sharing Platform",
  description: "Share and discover amazing video content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-black text-white antialiased`}>
        <Providers>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#1a1a1a",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}