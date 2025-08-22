import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WA_LINK } from "../lib/constants";
import {
  BadgeCheck,
  ShieldCheck,
  Zap,
  Banknote,
  Scale,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import joyas from "/joyas.webp";
import oro from "/plata.webp";
import reloj from "/relojes.webp";
import dolar from "/dolar.webp";

const slides = [
  { src: joyas, alt: "Joyas" },
  { src: oro, alt: "Lingotes" },
  { src: reloj, alt: "Reloj" },
  { src: dolar, alt: "Dólares" },
];

const INTERVAL_MS = 4800;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const flakes = [
  { l: "6%", t: "74%", s: 6, d: 10, delay: 0 },
  { l: "12%", t: "68%", s: 9, d: 12, delay: 0.7 },
  { l: "20%", t: "76%", s: 5, d: 11, delay: 1.2 },
  { l: "28%", t: "70%", s: 7, d: 13, delay: 2.1 },
  { l: "16%", t: "84%", s: 4, d: 9, delay: 0.4 },
  { l: "34%", t: "82%", s: 6, d: 12, delay: 1.6 },
  { l: "10%", t: "60%", s: 5, d: 10, delay: 0.2 },
  { l: "24%", t: "62%", s: 4, d: 9, delay: 1.9 },
  { l: "30%", t: "58%", s: 7, d: 12, delay: 2.5 },
  { l: "8%", t: "66%", s: 4, d: 8, delay: 1.3 },
  { l: "22%", t: "86%", s: 6, d: 11, delay: 0.9 },
  { l: "36%", t: "74%", s: 5, d: 10, delay: 2.9 },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) setIdx((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <section className="relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full gold-gradient blur-[120px] opacity-15"
          animate={{ y: [0, -30, 0], rotate: [0, 6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-32 w-[45vw] h-[45vw] rounded-full gold-gradient blur-[120px] opacity-10"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -6, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 left-[-20%] w-[140%] h-[55%] rotate-[-10deg] blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(60% 120% at 50% 50%, rgba(239,195,82,.25), rgba(0,0,0,0))",
          }}
          animate={{ x: ["0%", "12%", "-8%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {flakes.map((f, i) => (
          <motion.span
            key={i}
            style={{ left: f.l, top: f.t, width: f.s, height: f.s }}
            className="absolute rounded-full"
            animate={{ x: [0, 60], y: [0, -160], opacity: [0, 1, 0] }}
            transition={{
              duration: f.d,
              delay: f.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="block w-full h-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(239,195,82,0.95), rgba(231,173,42,0.2) 60%, rgba(0,0,0,0) 70%)",
                filter: "blur(0.4px)",
              }}
            />
          </motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-block text-xs uppercase tracking-widest text-brand-300/90"
          >
            Confianza • Seguridad • Mejor precio
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            Compramos <span className="text-brand-300">ORO</span>, plata y
            relojes de alta gama
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-neutral-200/90 text-lg"
          >
            Tasación gratuita y pago en el acto. <br />
            Hacemos <strong>cambio de divisas</strong>: dólares, euros, reales y
            libras esterlinas.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
            {/* Botón WhatsApp con animación constante */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-neutral-900 font-semibold shadow ring-2 ring-brand-400/40 overflow-hidden"
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 0 0 rgba(227,173,42,.30)",
                  "0 0 42px 10px rgba(227,173,42,.55)",
                  "0 0 0 0 rgba(227,173,42,.30)",
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-20">Cotizá por WhatsApp</span>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 0%, rgba(255,255,255,.45) 35%, transparent 70%)",
                  mixBlendMode: "soft-light",
                }}
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-[16px] z-0"
                style={{ boxShadow: "0 0 0 0 rgba(227,173,42,.35)" }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(227,173,42,.30)",
                    "0 0 50px 18px rgba(227,173,42,.55)",
                    "0 0 0 0 rgba(227,173,42,.30)",
                  ],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>

            <motion.a
              href="#tasacion"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 font-medium"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
            >
              Cómo tasamos
            </motion.a>
          </motion.div>

          {/* Bullets */}
          <motion.ul
            variants={container}
            className="mt-6 flex flex-wrap items-center gap-5 text-sm text-neutral-300/90"
          >
            <motion.li variants={item} className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-brand-300" />
              <span>Identidad verificada</span>
            </motion.li>
            <motion.li variants={item} className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-300" />
              <span>Operación segura</span>
            </motion.li>
            <motion.li variants={item} className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-300" />
              <span>Atención en el día</span>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Columna derecha: SLIDESHOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Crossfade entre imágenes */}
            <AnimatePresence mode="wait">
              <motion.img
                key={idx}
                src={slides[idx].src}
                alt={slides[idx].alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </AnimatePresence>

            {/* Controles */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/35 backdrop-blur border border-white/10 hover:bg-black/45 transition"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/35 backdrop-blur border border-white/10 hover:bg-black/45 transition"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir al slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    i === idx
                      ? "w-6 bg-amber-300"
                      : "w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Overlay: Beneficios */}
          <motion.div
            className="absolute -bottom-6 -right-4 bg-neutral-900/40 border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-sm font-medium">⭐ Beneficios</p>
            <ul className="mt-2 text-xs text-neutral-300 space-y-2">
              <li className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-brand-300" />
                <span>Balanza certificada</span>
              </li>
              <li className="flex items-center gap-2">
                <Banknote className="w-4 h-4 text-brand-300" />
                <span>Pago en el acto</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-300" />
                <span>Atención rápida</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-42 z-10">
        {/* desvanecido a negro/neutro */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-neutral-950" />
        {/* glow dorado muy suave que se mete en la sección siguiente */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[120%] h-40 blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(70% 100% at 50% 0%, rgba(239,195,82,.18), rgba(0,0,0,0))",
          }}
        />
      </div>
    </section>
  );
}
