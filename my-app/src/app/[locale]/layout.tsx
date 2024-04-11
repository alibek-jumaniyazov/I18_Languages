import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  
    title: "I18_Languages",
    description: "Generated by create next app",
};

export default function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
}
  