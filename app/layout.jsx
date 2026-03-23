export const metadata = {
  title: "ADMTMAX Amazon Marketplace Landing",
  description: "Amazon marketplace expansion landing page for ADMTMAX",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
