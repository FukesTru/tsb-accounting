/**
 * TSB Accounting Solutions — Floating "Call Now" Mobile Button
 * Visible on mobile only, fixed bottom-right
 */
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+14796331206"
      className="fixed bottom-6 right-4 z-50 lg:hidden flex items-center gap-2 bg-[#C9A84C] text-[#0B1E33] font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:bg-[#e0c070] transition-all duration-200 active:scale-95"
      aria-label="Call TSB Accounting Solutions"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  );
}

