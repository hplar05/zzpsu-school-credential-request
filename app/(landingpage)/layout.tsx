import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "ZZPSU Document Request Management",
  description: "ZZPSU Document Request Management",
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
