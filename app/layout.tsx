import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Roboto } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./_components/SmoothScrolling";

const lora = Lora({
  subsets: ['latin'], 
  weight: [
    '400', '500', '600', '700'
  ],
  variable: '--font-lora', 
});
const roboto = Roboto({
  subsets: ['latin'], 
  weight: [
    '100', '300', '400', '500', '700', '900'
  ],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Terry Nicole Photography",
  description: "A showcase of stunning photography by Terry Nicole",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrolling>
      {children}
    </SmoothScrolling>
  );
}
