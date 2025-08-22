import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { WA_LINK } from "../lib/constants";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function GlowBox({ children }) {
  return (
    <motion.div
      className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-700 via-brand-400 to-amber-300"
      style={{ backgroundSize: "200% 200%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <div className="rounded-2xl bg-neutral-950/70 border border-white/10 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.li variants={item}>
      <GlowBox>
        <div className="p-5">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="w-full flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <HelpCircle className="w-4 h-4 text-amber-300" />
              </span>
              <span className="font-medium">{q}</span>
            </div>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="ml-3 text-neutral-400"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="pt-3 text-sm text-neutral-300">
                  {a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlowBox>
    </motion.li>
  );
}

export default function FAQ() {
  const faqs = [
    {
      q: "¿Qué kilatajes de oro compran?",
      a: "24K, 18K, 14K y 9K. También tasamos oro dental y piezas dañadas.",
    },
    {
      q: "¿Cuánto pagan por gramo?",
      a: "Depende del kilataje y la cotización del día. Confirmamos el valor exacto al momento de la tasación.",
    },
    {
      q: "¿Compran relojes sin papeles o con desgaste?",
      a: "Sí. Evaluamos estado, modelo y mercado. Si el reloj es auténtico, hacemos oferta.",
    },
    {
      q: "¿Qué monedas cambian?",
      a: "Dólar (USD), Euro (EUR), Real (BRL) y Libra Esterlina (GBP). Traé tu DNI para operar.",
    },
  ];

  return (
    <section id="preguntas" className="relative px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 border-t border-white/10">
      {/* glow dorado de sección */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[90%] h-44 blur-3xl opacity-15 rounded-full"
        style={{ background: "radial-gradient(60% 100% at 50% 50%, rgba(239,195,82,.35), rgba(0,0,0,0))" }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          Preguntas frecuentes
          <motion.span
            className="block h-[3px] mt-2 rounded-full bg-gradient-to-r from-brand-500 via-amber-300 to-brand-400"
            style={{ backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </motion.h2>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 space-y-4"
        >
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href={`${WA_LINK}${WA_LINK.includes("?") ? "&" : "?"}text=${encodeURIComponent(
              "Hola! Tengo una consulta sobre sus servicios."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-neutral-900 font-semibold shadow ring-2 ring-amber-300/30 overflow-hidden"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 240, damping: 15 }}
          >
            <span className="relative z-20">¿No encontraste tu respuesta? Escribinos</span>
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,.50) 35%, transparent 70%)",
                mixBlendMode: "soft-light",
              }}
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
