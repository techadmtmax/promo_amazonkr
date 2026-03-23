import "./globals.css";

export const metadata = {
  title: "ADMTMAX Marketplace Landing Page",
  description: "ADMTMAX GROUP Amazon marketplace expansion landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
