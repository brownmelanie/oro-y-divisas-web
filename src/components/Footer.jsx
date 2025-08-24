import dev from "/developer.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pt-8 pb-16 md:pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-6">
          {/* Texto */}
          <div className="text-xs text-neutral-400 text-center md:text-left">
            <p>© {year} Oro&Divisas. Todos los derechos reservados.</p>
            <p className="mt-1">Tasación gratuita • Pago en el acto • Operaciones seguras</p>
          </div>

          {/* Navegación + badge dev */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-sm">
            <a href="#servicios" className="hover:text-brand-300 px-2 py-1">Servicios</a>
            <a href="#tasacion" className="hover:text-brand-300 px-2 py-1">Tasación</a>
            <a href="#divisas" className="hover:text-brand-300 px-2 py-1">Divisas</a>
            <a href="#preguntas" className="hover:text-brand-300 px-2 py-1">Preguntas</a>
            <a href="#contacto" className="hover:text-brand-300 px-2 py-1">Contacto</a>

            {/* Logo dev: no shrink, tamaño fijo y bien centrado */}
            <a
              href="https://brownmelanie.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-1"
              aria-label="Brown Melanie"
            >
              <img
                src={dev}
                alt="Brown Melanie"
                className="w-8 h-8 object-contain shrink-0"
              />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
