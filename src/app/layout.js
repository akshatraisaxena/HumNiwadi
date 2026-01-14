import BreakingNews from "@/components/BreakingNews/BreakingNews";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BreakingNews />
        {children}
        <Footer />
      </body>
    </html> 
  );
}
