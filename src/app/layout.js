import "./globals.css";
import Footer from "../components/footer.jsx";

export const metadata = {
  title: "FigmaLand — Work at the speed of thought",
  description:
    "Slate is designed for freelancers who want a simple way to plan their schedule.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
