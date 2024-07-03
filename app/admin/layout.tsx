import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";

export const metadata = {
  title: "Admin ZPPSU DOCUMENT REQUEST MANAGEMENT SYSTEM",
  description: "Admin ZPPSU DOCUMENT REQUEST MANAGEMENT SYSTEM",
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
