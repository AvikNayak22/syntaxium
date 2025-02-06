import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syntaxium",
  description:
    "A powerful browser-based code editor and snippet manager. Try it now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`${archivo.className} antialiased min-h-screen bg-gradient-to-b  from-zinc-950 to-black text-zinc-100 flex flex-col`}
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Footer />
          <Toaster
            toastOptions={{
              style: {
                background: "#151518",
                color: "#fff",
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
