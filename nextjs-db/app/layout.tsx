import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flux Todos",
  description: "Next.js todos demo with PostgreSQL on Flux Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
