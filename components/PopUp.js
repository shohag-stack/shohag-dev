"use client";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import Link from "next/link";

export default function NotificationBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function checkDismissed() {
        const dismissed = sessionStorage.getItem("notif-dismissed");
        if (!dismissed) setVisible(true);
    }
    checkDismissed();
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("notif-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-orange-600 via-blue-600 to-yellow-600 text-white px-4 py-2.5 flex items-center justify-center gap-3 relative text-sm font-medium z-[60]">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>

      <p className="text-center leading-tight">
        🚀 Available for new projects —{" "}
        
         <Link 
         onClick={handleClose}
         href="/contact"
          className="underline underline-offset-2 decoration-white/50 hover:decoration-white transition-all font-semibold"
        >
          Let&apos;s work together
        </Link>
      </p>
      <button
        onClick={handleClose}
        aria-label="Dismiss notification"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}