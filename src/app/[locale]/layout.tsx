import type { Metadata } from "next";
import "../globals.css";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import { Montserrat, Raleway } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { fetchSiteData } from "@/shared/utils/dotacms";

export async function generateMetadata(props: {
  params: Promise<{ locale?: "en" | "uk" }>;
}): Promise<Metadata> {
  const { params } = props;
  const { locale = "uk" } = await params;
  console.log("Locale in generateMetadata:", locale);
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://rsd-radar.vercel.app";

  const defaultMetadata = {
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      url: baseUrl,
      locale: locale === "en" ? "en_US" : "uk_UA",
      images: [
        {
          url: "/images/bot-contacts/radar-desk.webp",
          width: 1200,
          height: 630,
          alt: "RSD Radar Logo",
        },
      ],
    },
  };

  if (locale === "en") {
    const defaultTitle = "RSD Radar | Road Safety";
    const description =
      "RSD Radar — innovative solutions for road safety. Learn about our radars, their benefits and applications.";
    const keywords = [
      "RSD Radar",
      "road safety",
      "road radar",
      "innovative radars",
    ];

    return {
      ...defaultMetadata,
      keywords,
      title: {
        default: defaultTitle,
        template: `%s | RSD Radar`,
      },
      description,
      openGraph: {
        ...defaultMetadata.openGraph,
        title: defaultTitle,
        description,
      },
    };
  }

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
    ...defaultMetadata,
    keywords,
    title: {
      default: defaultTitle,
      template: `%s | RSD Radar`,
    },
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: defaultTitle,
      description,
    },
  };
}
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "uk" }>;
}) {
  const { children, params } = props;
  const { locale } = await params;
  const { contacts, email } = await fetchSiteData();

  return (
    <html lang={locale} className={`${montserrat.className}`}>
      <body className="bg-dark min-h-[100svh] flex flex-col">
        <NextIntlClientProvider locale={locale}>
          <Header contacts={contacts} />
          <div className="flex flex-col flex-1">
            <main className="bg-background-gray flex-1 w-full overflow-y-auto overflow-x-hidden">
              {children}
            </main>
            <Footer email={email.email} contacts={contacts} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
