import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { WA_LINK } from "../lib/constants";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import mapa from "../assets/mapa.webp";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Frame({ children }) {
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

function waUrlWithText(text) {
  const sep = WA_LINK.includes("?") ? "&" : "?";
  return `${WA_LINK}${sep}text=${encodeURIComponent(text)}`;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [phoneI, setPhoneI] = useState("");
  const [service, setService] = useState("Vender oro");
  const [msg, setMsg] = useState("");

  const telHref = useMemo(() => {
    const raw = import.meta.env.VITE_PHONE || "5491100000000";
    return `tel:${raw.startsWith("+") ? raw : `+${raw}`}`;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Hola! Soy ${name}. Quiero coordinar: ${service}.
Mi teléfono: ${phoneI}.
${msg ? `Mensaje: ${msg}` : ""}`;
    window.open(waUrlWithText(text), "_blank");
  };

  return (
    <section id="contacto" className="relative px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 border-t border-white/10">
      {/* glow dorado de fondo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[92%] h-48 blur-3xl opacity-15 rounded-full"
        style={{ background: "radial-gradient(60% 100% at 50% 50%, rgba(239,195,82,.35), rgba(0,0,0,0))" }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        {/* Columna izquierda: formulario */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={item} className="text-3xl font-bold">
            Contacto
            <motion.span
              className="block h-[3px] mt-2 rounded-full bg-gradient-to-r from-brand-500 via-amber-300 to-brand-400"
              style={{ backgroundSize: "200% 100%" }}
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </motion.h2>

          <motion.form
            variants={item}
            onSubmit={onSubmit}
            className="mt-6"
          >
            <Frame>
              <div className="p-5 grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-neutral-300">Nombre</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-lg bg-neutral-900/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300/40 focus:border-amber-200/40 transition"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-sm text-neutral-300">Teléfono</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phoneI}
                      onChange={(e) => setPhoneI(e.target.value)}
                      className="mt-1 w-full rounded-lg bg-neutral-900/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300/40 focus:border-amber-200/40 transition"
                      placeholder="Ej. +54 9 11..."
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="text-sm text-neutral-300">Servicio</label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-1 w-full rounded-lg bg-neutral-900/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300/40 focus:border-amber-200/40 transition"
                    >
                      <option>Vender oro</option>
                      <option>Vender plata</option>
                      <option>Vender reloj</option>
                      <option>Cambio de divisas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="msg" className="text-sm text-neutral-300">Mensaje</label>
                  <textarea
                    id="msg"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="mt-1 w-full rounded-lg bg-neutral-900/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300/40 focus:border-amber-200/40 transition"
                    rows="4"
                    placeholder="Contanos qué querés vender o cambiar"
                  />
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.button
                    type="submit"
                    className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-neutral-900 font-semibold shadow ring-2 ring-amber-300/30 overflow-hidden"
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 240, damping: 15 }}
                    aria-label="Enviar por WhatsApp"
                  >
                    <span className="relative z-20 inline-flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Enviar por WhatsApp
                    </span>
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-10"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 0%, rgba(255,255,255,.50) 35%, transparent 70%)",
                        mixBlendMode: "soft-light",
                      }}
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
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
                  </motion.button>
                </div>
              </div>
            </Frame>
          </motion.form>
        </motion.div>

        {/* Columna derecha: imagen + data */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <Frame>
            <motion.div
              className="aspect-[4/3] w-full overflow-hidden"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={mapa}
                alt="Ubicación / Atención"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Frame>

          {/* Overlay informativo */}
          <motion.div
            className="absolute -bottom-6 -right-4 bg-neutral-900/85 border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-amber-300" />
              <p><strong>Dirección:</strong> Calle 123, Buenos Aires</p>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <Clock className="w-4 h-4 text-amber-300" />
              <p><strong>Horario:</strong> Lun a Vie 10–18 hs • Sáb 10–14 hs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
