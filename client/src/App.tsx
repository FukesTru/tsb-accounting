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
import FractionalCFOService from "./pages/services/FractionalCFOService";
import FractionalController from "./pages/services/FractionalController";
import MonthlyBookkeeping from "./pages/services/MonthlyBookkeeping";
import CleanupBookkeeping from "./pages/services/CleanupBookkeeping";

// Service area pages
import LowellAR from "./pages/areas/LowellAR";
import NorthwestArkansas from "./pages/areas/NorthwestArkansas";
import BentonvilleAR from "./pages/areas/BentonvilleAR";
import RogersAR from "./pages/areas/RogersAR";

function Router() {
  return (
    <Switch>
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

      {/* 404 */}
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

