import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WA_LINK } from "../lib/constants";
import { Menu, X } from "lucide-react";
import logo from "/icon-navbar.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(0);

  useEffect(() => {
    const update = () => setHeaderH(headerRef.current?.offsetHeight || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 10);

      if (open) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      const delta = Math.abs(y - lastY.current);
      if (delta < 6) return;

      if (y > lastY.current && y > 80) setHidden(true);
      else setHidden(false);

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass =
    "relative transition-colors duration-200 hover:text-gray-300 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
    "after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full";

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      ref={headerRef}
      className={[
        "sticky top-0 z-40 backdrop-blur",
        "transition-colors duration-300",
        scrolled
          ? "bg-stone-950/75 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-stone-950/60 border-b border-white/10",
      ].join(" ")}
      initial={false}
      animate={{ y: hidden ? -90 : 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-lg font-extrabold tracking-tight">
          <img className="w-52" src={logo} alt="Oro&Divisas" />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicios" className={linkClass}>
            Servicios
          </a>
          <a href="#tasacion" className={linkClass}>
            Tasación
          </a>
          <a href="#divisas" className={linkClass}>
            Divisas
          </a>
          <a href="#preguntas" className={linkClass}>
            Preguntas
          </a>
          <a href="#contacto" className={linkClass}>
            Contacto
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl gold-gradient text-neutral-900 font-semibold shadow
            transition-transform duration-200 hover:scale-[1.02] active:scale-95"
          >
            Cotizá por WhatsApp
          </a>
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden inline-flex items-center justify-center w-10 h-10hover:bg-white/5 transition active:scale-95"
        >
          {open ? (
            <X className="w-5 h-5 text-white" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5 text-white" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-30 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              className="fixed left-0 right-0 z-50 md:hidden border-t border-white/10 bg-stone-950/95 backdrop-blur"
              style={{ top: headerH }}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="px-10 pt-8 pb-6 flex flex-col gap-3 text-sm">
                <a href="#servicios" className={linkClass} onClick={closeMenu}>
                  Servicios
                </a>
                <a href="#tasacion" className={linkClass} onClick={closeMenu}>
                  Tasación
                </a>
                <a href="#divisas" className={linkClass} onClick={closeMenu}>
                  Divisas
                </a>
                <a href="#preguntas" className={linkClass} onClick={closeMenu}>
                  Preguntas
                </a>
                <a href="#contacto" className={linkClass} onClick={closeMenu}>
                  Contacto
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-8 rounded-xl gold-gradient text-neutral-900 font-semibold shadow
                             transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                >
                  Cotizá por WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
