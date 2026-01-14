import "./globals.css";

export const metadata = {
  title: "Rich Dimensions Auctioneers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen flex flex-col bg-stone-300 relative">
        {children}
      </body>
    </html>
  );
}
