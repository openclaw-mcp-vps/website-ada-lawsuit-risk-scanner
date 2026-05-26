import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADA Lawsuit Risk Scanner – Protect Your Website",
  description: "Scan your website for ADA compliance issues that lead to lawsuits. Get a risk score and actionable remediation steps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cc9b3ec8-ea16-4707-92c5-af54c0db5173"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
