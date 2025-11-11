// import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <ThemeProvider>{children}</ThemeProvider> */}
      </body>
    </html>
  );
}
