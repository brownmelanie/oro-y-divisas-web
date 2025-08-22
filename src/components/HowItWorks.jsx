import { motion } from "framer-motion";
import { PhoneCall, Scale, BadgeCheck, Banknote } from "lucide-react";
import { WA_LINK } from "../lib/constants";
import joyas from "/joyas2.webp";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Step({ n, title, text, icon: Icon, last = false }) {
  return (
    <motion.li variants={item} className="relative pl-12">
      {/* Conector vertical */}
      {!last && (
        <span
          aria-hidden
          className="absolute left-5 top-10 bottom-[-18px] w-px bg-white/10"
        />
      )}
      {/* Número/Icono */}
      <span className="absolute left-0 top-0 w-10 h-10 rounded-full gold-gradient text-neutral-900 font-extrabold grid place-items-center border border-amber-200/40 shadow">
        {n}
      </span>

      {/* Card del paso */}
      <motion.div
        whileHover={{ y: -2 }}
        className="rounded-xl border border-white/10 bg-neutral-950/60 p-4 backdrop-blur"
      >
        <div className="flex items-center gap-2">
          {Icon && (
            <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Icon className="w-4 h-4 text-amber-300" />
            </span>
          )}
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-neutral-300">{text}</p>
      </motion.div>
    </motion.li>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="tasacion"
      className="relative pt-28 px-8 pb-20 lg:pt-36 lg:pb-28 border-t border-white/10"
    >
      {/* Glow dorado sutil de fondo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[90%] h-48 blur-3xl opacity-15 rounded-full"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(239,195,82,.35), rgba(0,0,0,0))",
        }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Texto / pasos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={item} className="text-3xl font-bold">
            ¿Cómo es la tasación?
            <motion.span
              className="block h-[3px] mt-2 rounded-full bg-gradient-to-r from-brand-500 via-amber-300 to-brand-400"
              style={{ backgroundSize: "200% 100%" }}
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </motion.h2>

          <motion.ol
            variants={container}
            className="mt-6 space-y-5 text-neutral-200"
          >
            <Step
              n={1}
              title="Nos contactás"
              text="Escribinos por WhatsApp y contanos qué querés vender o cambiar."
              icon={PhoneCall}
            />
            <Step
              n={2}
              title="Verificamos y pesamos"
              text="Identificamos kilataje (24/18/14/9K) o pureza (925/950) y pesamos en balanza calibrada."
              icon={Scale}
            />
            <Step
              n={3}
              title="Cotizamos y pagamos"
              text="Te ofrecemos la mejor cotización según mercado. Si aceptás, pagamos en el acto (efectivo o transferencia)."
              icon={Banknote}
              last
            />
          </motion.ol>

          {/* CTA */}
          <motion.a
            href={`${WA_LINK}${
              WA_LINK.includes("?") ? "&" : "?"
            }text=${encodeURIComponent(
              "Hola! Quisiera coordinar una tasación."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="mt-6 relative inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-neutral-900 font-semibold shadow ring-2 ring-amber-300/30 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 240, damping: 15 }}
          >
            <span className="relative z-20">Coordinar por WhatsApp</span>

            {/* brillo diagonal permanente */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(120deg, transparent 0%, rgba(255,255,255,.50) 35%, transparent 70%)",
                mixBlendMode: "soft-light",
              }}
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* halo respirando sutil */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[16px] z-0"
              style={{ boxShadow: "0 0 0 0 rgba(227,173,42,.30)" }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(227,173,42,.30)",
                  "0 0 50px 18px rgba(227,173,42,.50)",
                  "0 0 0 0 rgba(227,173,42,.30)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>

        {/* Imagen / demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={joyas} className="w-full h-full object-cover" />
          </motion.div>

          {/* Tarjeta flotante con checklist */}
          <motion.div
            className="absolute -bottom-6 -right-4 bg-neutral-900/85 border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-sm font-medium">Checklist de tasación</p>
            <ul className="mt-2 text-xs text-neutral-300 space-y-1">
              <li className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-amber-300" />
                Balanza calibrada
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-amber-300" />
                Verificación de kilataje / pureza
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-amber-300" />
                Cotización al momento
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
