import { UserNavbar } from "@/app/dashboard/_components/navBar";
import { Footer } from "@/components/Footer";
import { UserSidebar } from "./_components/sideBar";

export const metadata = {
  title: "ZZPSU Requests Credentials",
  description: "ZZPSU Requests Credentials",
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
