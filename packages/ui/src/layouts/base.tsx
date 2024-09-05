export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ID">
      <body>{children}</body>
    </html>
  );
}
