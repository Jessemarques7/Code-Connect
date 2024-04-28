import Aside from "@/components/Aside";
import "./globals.css";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Code Connect",
  description: "A Social media for devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={prompt.className}>
      <body>
        <div className="app-container">
          <div>
            <Aside />
          </div>
          <div className="main-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
