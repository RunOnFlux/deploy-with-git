import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello Flux",
  description: "A Next.js hello world app deployed on Flux Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
