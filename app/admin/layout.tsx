import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";

export const metadata = {
  title: "Admin ZZPSU Document Request Management",
  description: "Admin ZZPSU Document Request Management",
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
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
