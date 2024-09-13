import type { Metadata } from "next";
import Header from "~/components/header";
import Footer from "~/components/footer";

import "@kb/style";

export const metadata: Metadata = {
  title: {
    template: "%s - Next.js",
    default: "Next.js",
  },
  description: "Kinetic Blueprint with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
