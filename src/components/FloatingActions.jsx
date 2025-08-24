// src/components/FloatingActions.jsx (puede reemplazar tu FloatingWA.jsx)
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { WA_LINK } from "../lib/constants";
import whatsApp from "/whatsappLogo.svg";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300); // umbral
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        title="Volver arriba"
        className={`inline-flex items-center justify-center w-9 h-9 rounded-full
                    border border-white/10 bg-white/5 backdrop-blur text-white shadow-lg
                    transition-all hover:bg-white/10 active:scale-95
                    ${showTop ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* WhatsApp flotante */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="inline-flex items-center justify-center w-9 h-9 lg:w-14 lg:h-14 rounded-full gold-gradient
                   text-neutral-900 font-extrabold shadow-xl active:scale-95 transition"
      >
        <img src={whatsApp} alt="WhatsApp" className="w-5 h-5 lg:w-8 lg:h-8" />
      </a>
    </div>
  );
}