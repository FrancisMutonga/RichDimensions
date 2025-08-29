"use client";
import Head from "next/head";
import "./globals.css";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  

  return (
    <>
      {/* SEO Improvements in <head> */}
      <Head>
        <title>Rich dimensional auctioneers</title>
        
       
      </Head>

      <html lang="en">
        <body className="min-h-screen w-screen flex flex-col bg-stone-300 relative">
          
          <main className="flex-grow mb-2">{children}</main>
        

         
        </body>
      </html>
    </>
  );
};

export default Layout;
