import { siteConfig as base } from '../data/site';

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={base.lang} dir={base.dir}>
      <body>{children}</body>
    </html>
  );
}
