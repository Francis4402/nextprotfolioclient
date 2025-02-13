import type { Metadata } from "next";
import "../globals.css";
import DashboardNavbar from "./components/DashboardNavbar";




export const metadata: Metadata = {
  title: "Dashboard",
  description: "Next js portfolio",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body>
        <div className="min-h-full bg-gray-950">
          <DashboardNavbar />
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
