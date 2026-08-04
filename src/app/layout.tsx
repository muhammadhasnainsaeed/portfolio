import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import type { Metadata } from "next";


import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hasnainsaeed.vercel.app"),

  title: {
    default: "Muhammad Hasnain Saeed | Software Engineer",
    template: "%s | Hasnain Saeed",
  },

  description:
    "Muhammad Hasnain Saeed is a Software Engineer and Full-Stack Developer building modern, scalable, and user-focused digital experiences with clean code and thoughtful engineering.",

  keywords: [
    "Muhammad Hasnain Saeed",
    "Hasnain Saeed",
    "Muhammad Hasnain",
    "mhasnainsaeed",
    "mhasnain",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Developer Portfolio",
  ],

  authors: [
    {
      name: "Muhammad Hasnain Saeed",
      url: "https://github.com/muhammadhasnainsaeed",
    },
  ],

  creator: "Muhammad Hasnain Saeed",
  publisher: "Muhammad Hasnain Saeed",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
      icon: [
        { url: "/favicon/favicon.ico", sizes: "48x48" },
        { url: "/favicon/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
      shortcut: [{ url: "/favicon/favicon.ico" }],
    },

  openGraph: {
    title: "Muhammad Hasnain Saeed | Software Engineer",
    description:
      "Software Engineer and Full-Stack Developer building modern, scalable, and user-focused digital experiences with clean code and thoughtful engineering.",
    siteName: "Muhammad Hasnain Saeed",
    type: "website",
    url: "https://hasnainsaeed.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hasnain Saeed | Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hasnain Saeed | Software Engineer",
    description:
      "Software Engineer and Full-Stack Developer building modern, scalable, and user-focused digital experiences.",
    images: ["/og-image.jpg"],
    creator: "@m_hasnain_saeed",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Hasnain Saeed",
  alternateName: [
    "Hasnain Saeed",
    "Muhammad Hasnain",
    "mhasnainsaeed",
    "mhasnain",
    "m_hasnain_saeed",
  ],
  url: "https://hasnainsaeed.vercel.app",
  jobTitle: "Software Engineer",
  description:
    "Muhammad Hasnain Saeed is a Software Engineer and Full-Stack Developer building modern, scalable, and user-focused digital experiences.",
  sameAs: [
    "https://github.com/muhammadhasnainsaeed",
    "https://www.linkedin.com/in/muhammadhasnainsaeed",
    "https://www.facebook.com/muhammadhassnainsaeed",
    "https://www.instagram.com/m_hasnain_saeed",
    "https://x.com/m_hasnain_saeed",
    "https://www.twitch.tv/mhasnainsaeed",
    "https://dev.to/muhammadhasnainsaeed",
    "https://www.fiverr.com/hasnainsaeed_22",
    "https://mhasnainsaeed.medium.com/",
    "https://medium.com/@mhasnainsaeed",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
