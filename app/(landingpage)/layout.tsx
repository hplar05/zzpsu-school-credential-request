import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "ZPPSU DOCUMENT REQUEST MANAGEMENT SYSTEM",
  description: "ZPPSU DOCUMENT REQUEST MANAGEMENT SYSTEM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
