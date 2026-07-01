import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cono Sur Abogados | Asesoramiento Legal Civil, Laboral y de Seguros",
  description: "Bienvenidos a Cono Sur Abogados. Brindamos asesoramiento y representación legal seria, clara y accesible en derecho civil, laboral, accidentes de tránsito y reclamos a compañías de seguros. Contactanos para un análisis personalizado de tu caso.",
  keywords: ["abogados", "derecho civil", "derecho laboral", "accidentes de transito", "reclamos seguros", "estudio juridico", "buenos aires", "argentina"],
  authors: [{ name: "Cono Sur Abogados" }],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
