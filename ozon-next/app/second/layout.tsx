export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <strong>Second Layout</strong>
        <br/>
        {children}
      </body>
    </html>
  );
}
