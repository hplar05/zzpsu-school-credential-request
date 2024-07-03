import { UserNavbar } from "@/app/dashboard/_components/navBar";
import { Footer } from "@/components/Footer";
import { UserSidebar } from "./_components/sideBar";

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
        <UserNavbar />
        <UserSidebar />
        {children}
      </body>
    </html>
  );
}
