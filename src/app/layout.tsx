import type { Metadata } from "next";
import "./globals.css";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import { Montserrat, Raleway } from "next/font/google";
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://rsd-radar.vercel.app";
  const defaultTitle = "RSD Radar | Безпека доріг";
  const description =
    "RSD Radar — інноваційні рішення для безпеки доріг. Дізнайся про наші радари, переваги та напрямки використання.";
  const keywords = [
    "RSD Radar",
    "безпека доріг",
    "радар для доріг",
    "інноваційні радари",
  ];

  return {
    metadataBase: new URL(baseUrl),
    keywords: keywords,
    title: {
      default: defaultTitle,
      template: `%s | RSD Radar`,
    },
    description: description,
    openGraph: {
      type: "website",
      url: baseUrl,
      title: defaultTitle,
      description: description,
      images: [
        {
          url: "/images/radar-desk.png",
          width: 1200,
          height: 630,
          alt: "RSD Radar Logo",
        },
      ],
    },
  };
}

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
