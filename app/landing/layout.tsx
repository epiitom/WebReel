import { Inter } from "next/font/google";
import Providers from "../components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reelsit - Share Your Moments",
  description: "Create, share, and discover amazing video content with Reelsit",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 