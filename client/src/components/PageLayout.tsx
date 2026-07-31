/**
 * TSB Accounting Solutions — Page Layout Wrapper
 * Includes Navbar, Footer
 */
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {(title || description) && (
        <head>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </head>
      )}
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
