import { motion } from "framer-motion";
import {
  Coins,
  Diamond,
  Watch,
  BadgeDollarSign,
  ArrowRight,
  Gem,
} from "lucide-react";
import { useFxRates } from "../lib/useFxRates";

import oro from "/oro.webp";
import plata from "/plata.webp";
import relojes from "/relojes.webp";
import brillanteria from "/brillanteria.webp";
import { WA_LINK } from "../lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function waUrlFor(title) {
  const text = `Hola! Quisiera saber más sobre ${title}. ¿Me pueden asesorar?`;
  const sep = WA_LINK.includes("?") ? "&" : "?";
  return `${WA_LINK}${sep}text=${encodeURIComponent(text)}`;
}

function FancyWrap({ children }) {
  return (
    <motion.div
      className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-700 via-brand-400 to-amber-300 overflow-hidden"
      style={{ backgroundSize: "200% 200%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="h-full rounded-2xl bg-neutral-950/70 backdrop-blur-md border border-white/10">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.12 }}
          transition={{ duration: 0.25 }}
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, rgba(239,195,82,.6), rgba(0,0,0,0))",
            mixBlendMode: "screen",
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}

function Card({ title, badge, desc, img, icon: Icon }) {
  return (
    <motion.article
      variants={item}
      className="group h-full"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <FancyWrap>
        <div className="p-5 h-full flex flex-col min-h-[346px]">
          <div className="space-y-2 min-h-[120px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {Icon && (
                  <motion.span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10"
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    <Icon className="w-4 h-4 text-amber-300" />
                  </motion.span>
                )}
                <h3 className="font-semibold">{title}</h3>
              </div>
              {badge && (
                <span className="text-[11px] leading-none px-3 py-1 rounded-full bg-amber-300/10 text-amber-200 border border-amber-200/30 font-mono tabular-nums whitespace-nowrap">
                  {badge}
                </span>
              )}
            </div>
            <p className="text-sm text-neutral-300">{desc}</p>
          </div>

          {img && (
            <div className="mt-4 h-32 rounded-xl overflow-hidden border border-white/10 relative">
              <motion.div
                className="absolute inset-0"
                initial={{
                  background:
                    "radial-gradient(80% 80% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,.0) 55%, rgba(0,0,0,.22) 100%)",
                }}
                whileHover={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,.0) 45%, rgba(0,0,0,.3) 100%)",
                }}
                transition={{ duration: 0.4 }}
              />
              <motion.img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06, rotate: 0.15 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              />
            </div>
          )}

          <div className="mt-auto" />
          <motion.a
            href={waUrlFor(title)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-xs text-amber-200/90 opacity-0 group-hover:opacity-100"
            whileTap={{ scale: 0.98 }}
            aria-label={`Ver más sobre ${title} en WhatsApp`}
          >
            Ver más <ArrowRight className="w-3 h-3" />
          </motion.a>
        </div>
      </FancyWrap>
    </motion.article>
  );
}

export default function Services() {
  const { loading, toARS, updated, error } = useFxRates();
  const nfARS = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2,
  });

  return (
    <section
      id="servicios"
      className="relative pt-28 px-6 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Glow dorado sutil de fondo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[90%] h-48 blur-3xl opacity-15 rounded-full"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(239,195,82,.35), rgba(0,0,0,0))",
        }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">
              Servicios principales
              <motion.span
                className="block h-[3px] mt-2 rounded-full bg-gradient-to-r from-brand-500 via-amber-300 to-brand-400"
                style={{ backgroundSize: "200% 100%" }}
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </h2>
            <p className="mt-2 text-neutral-300">
              Compramos oro, plata, <strong>brillantería</strong> y relojes.
              Cambio de divisas con cotización actualizada.
            </p>
          </div>
        </div>

        {/* Grid de tarjetas */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-stretch"
        >
          <Card
            title="Compra de ORO"
            badge="24–18–14–9K"
            desc="Anillos, cadenas, aros, medallas, dental, rotos o incompletos. Se paga por gramo."
            img={oro}
            icon={Coins}
          />

          <Card
            title="Compra de PLATA"
            desc="925/950: joyas, cubiertos, piezas antiguas. Tasación al momento."
            img={plata}
            icon={Diamond}
          />

          <Card
            title="Compra de BRILLANTERÍA"
            desc="Solitarios, alianzas, aros y colgantes con diamantes. Tasación por quilataje, color y pureza."
            img={brillanteria}
            icon={Gem}
          />

          <Card
            title="Relojes de alta gama"
            desc="Rolex, Omega, Tag Heuer, Cartier y más. Con o sin papeles."
            img={relojes}
            icon={Watch}
          />

          {/* DIVISAS */}
          <motion.article
            id="divisas"
            variants={item}
            className="group h-full"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <FancyWrap>
              <div className="p-5 h-full flex flex-col min-h-[345px]">
                <div className="space-y-2 min-h-[120px]">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10">
                      <BadgeDollarSign className="w-4 h-4 text-amber-300" />
                    </span>
                    <h3 className="font-semibold">Cambio de divisas</h3>
                  </div>
                  <p className="text-sm text-neutral-300">
                    USD • EUR • BRL • GBP
                    <br /> Operación segura y transparente.
                  </p>
                </div>

                <div className="mb-4 grid grid-cols-4 gap-2">
                  {["USD", "EUR", "BRL", "GBP"].map((code, idx) => {
                    const val = toARS ? toARS[code] : null;
                    const show = val && isFinite(val) ? nfARS.format(val) : "—";
                    return (
                      <motion.div
                        key={code}
                        className="relative rounded-lg border border-amber-200/20 bg-amber-100/[0.03]
                   overflow-hidden min-h-[60px] px-2
                   flex flex-col items-center justify-center"
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          duration: 3 + idx * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {loading && (
                          <motion.span
                            aria-hidden
                            className="absolute inset-0 opacity-20"
                            style={{
                              background:
                                "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.25), rgba(255,255,255,0))",
                            }}
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.2,
                            }}
                          />
                        )}
                        <p className="text-[11px] text-amber-200 font-medium leading-none">
                          {code}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-white leading-tight tabular-nums whitespace-nowrap">
                          {show}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.a
                  href={waUrlFor("Cambio de divisas")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-amber-200/90"
                  whileTap={{ scale: 0.98 }}
                  aria-label="Ver más sobre Cambio de divisas en WhatsApp"
                >
                  Ver más <ArrowRight className="w-3 h-3" />
                </motion.a>

                <div className="mt-auto" />
                <p className="mt-3 text-[11px] text-neutral-400">
                  {error ? (
                    <>
                      No se pudo actualizar la cotización.
                      <br />
                      Valores aproximados de referencia. Confirmá la cotización
                      final por WhatsApp.
                    </>
                  ) : (
                    <>
                      Valores aproximados de referencia. Confirmá la cotización
                      final por WhatsApp.
                    </>
                  )}
                </p>
              </div>
            </FancyWrap>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
