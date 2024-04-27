import Aside from "@/components/Aside";
import "./globals.css";

export const metadata = {
  title: "Code Connect",
  description: "A Social media for devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
