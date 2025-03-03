import type { Metadata } from "next";
import "./globals.css";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import { Montserrat, Raleway } from "next/font/google";

export const metadata: Metadata = {
  title: "RSD Radar",
  description: "Кращий іноваційний партнер для безпеки доріг у вашій громаді.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${montserrat.className} ${raleway.className}`}>
      <body className="bg-dark min-h-[100svh] flex flex-col">
        <Header />
        <div className="flex flex-col flex-1">
          <main className="bg-background-gray flex-1 w-full overflow-y-auto overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
