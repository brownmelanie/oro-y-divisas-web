import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Zap, Star } from "lucide-react";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function GlowCard({ children }) {
  return (
    <motion.div
      className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-700 via-brand-400 to-amber-300"
      style={{ backgroundSize: "200% 200%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <div className="rounded-2xl h-full bg-neutral-950/70 border border-white/10 p-5 text-center flex flex-col min-h-[180px]">
        {/* halo en hover */}
        <motion.span
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

export default function Trust() {
  const items = [
    { icon: BadgeCheck, title: "Identidad verificada", text: "Operamos con documentación y balanza certificada." },
    { icon: ShieldCheck, title: "Operación segura", text: "Lugar acordado o punto de atención con vigilancia." },
    { icon: Zap,        title: "Pago en el acto",      text: "Efectivo o transferencia inmediata." },
    { icon: Star,       title: "Excelente reputación", text: "Clientes satisfechos nos recomiendan." },
  ];

  return (
    <section className="relative pt-20 px-8 pb-16 border-t border-white/10">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] h-40 blur-3xl opacity-15 rounded-full"
        style={{ background: "radial-gradient(60% 100% at 50% 50%, rgba(239,195,82,.35), rgba(0,0,0,0))" }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          {items.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="h-full"
            >
              <GlowCard>
                <div className="flex flex-col items-center text-center h-full">
                  <motion.span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    <Icon className="w-5 h-5 text-amber-300" />
                  </motion.span>

                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{text}</p>

                  <div className="mt-auto" />

                  <motion.span
                    aria-hidden
                    className="mt-3 h-[3px] w-0 rounded-full bg-gradient-to-r from-brand-500 via-amber-300 to-brand-400"
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
              </GlowCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
