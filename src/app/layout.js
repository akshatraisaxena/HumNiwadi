import BreakingNews from "@/components/BreakingNews";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import BreakingNews from "@/components/BreakingNews";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        {/* <BreakingNews /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
