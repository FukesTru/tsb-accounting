/**
 * TSB Accounting Solutions — App Router
 * 18 pages: Core + Services + Service Areas
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Core pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SitemapPage from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

// Service parent pages
import AccountingAdvisory from "./pages/services/AccountingAdvisory";
import FractionalCFOPage from "./pages/services/FractionalCFO";
import BookkeepingPage from "./pages/services/Bookkeeping";

// Service sub-pages
import TaxPlanning from "./pages/services/TaxPlanning";
import FinancialStatements from "./pages/services/FinancialStatements";
import BusinessAdvisory from "./pages/services/BusinessAdvisory";
import ConstructionAccounting from "./pages/services/ConstructionAccounting";
import FractionalCFOService from "./pages/services/FractionalCFOService";
import FractionalController from "./pages/services/FractionalController";
import MonthlyBookkeeping from "./pages/services/MonthlyBookkeeping";
import CleanupBookkeeping from "./pages/services/CleanupBookkeeping";

// Service area pages
import LowellAR from "./pages/areas/LowellAR";
import NorthwestArkansas from "./pages/areas/NorthwestArkansas";
import BentonvilleAR from "./pages/areas/BentonvilleAR";
import RogersAR from "./pages/areas/RogersAR";
import FayettevilleAR from "./pages/areas/FayettevilleAR";
import SpringdaleAR from "./pages/areas/SpringdaleAR";
import ConstructionLowell from "./pages/services/construction/ConstructionLowell";
import ConstructionBentonville from "./pages/services/construction/ConstructionBentonville";
import ConstructionRogers from "./pages/services/construction/ConstructionRogers";
import ConstructionFayetteville from "./pages/services/construction/ConstructionFayetteville";
import ConstructionSpringdale from "./pages/services/construction/ConstructionSpringdale";
import FileManager from "./pages/admin/FileManager";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <ScrollToTop />
      {/* Core */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/sitemap" component={SitemapPage} />

      {/* Service parent pages */}
      <Route path="/services/accounting-advisory" component={AccountingAdvisory} />
      <Route path="/services/fractional-cfo-controller" component={FractionalCFOPage} />
      <Route path="/services/bookkeeping" component={BookkeepingPage} />
      <Route path="/services/construction-accounting" component={ConstructionAccounting} />

      {/* Accounting & Advisory sub-pages */}
      <Route path="/services/accounting-advisory/tax-planning" component={TaxPlanning} />
      <Route path="/services/accounting-advisory/financial-statements" component={FinancialStatements} />
      <Route path="/services/accounting-advisory/business-advisory" component={BusinessAdvisory} />

      {/* Fractional CFO sub-pages */}
      <Route path="/services/fractional-cfo-controller/fractional-cfo" component={FractionalCFOService} />
      <Route path="/services/fractional-cfo-controller/fractional-controller" component={FractionalController} />

      {/* Bookkeeping sub-pages */}
      <Route path="/services/bookkeeping/monthly-bookkeeping" component={MonthlyBookkeeping} />
      <Route path="/services/bookkeeping/cleanup-catch-up" component={CleanupBookkeeping} />

      {/* Service area pages */}
      <Route path="/areas/lowell-ar" component={LowellAR} />
      <Route path="/areas/northwest-arkansas" component={NorthwestArkansas} />
      <Route path="/areas/bentonville-ar" component={BentonvilleAR} />
      <Route path="/areas/rogers-ar" component={RogersAR} />
      <Route path="/areas/fayetteville-ar" component={FayettevilleAR} />
      <Route path="/areas/springdale-ar" component={SpringdaleAR} />
      <Route path="/services/construction-accounting/lowell-ar" component={ConstructionLowell} />
      <Route path="/services/construction-accounting/bentonville-ar" component={ConstructionBentonville} />
      <Route path="/services/construction-accounting/rogers-ar" component={ConstructionRogers} />
      <Route path="/services/construction-accounting/fayetteville-ar" component={ConstructionFayetteville} />
      <Route path="/services/construction-accounting/springdale-ar" component={ConstructionSpringdale} />

      {/* 404 */}
      {/* Admin */}
      <Route path="/admin/files" component={FileManager} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
