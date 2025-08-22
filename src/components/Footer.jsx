import dev from "../assets/developer.svg"

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        <div className="text-xs text-neutral-400">
          <p>© {year} Oro&Divisas. Todos los derechos reservados.</p>
          <p className="mt-1">
            Tasación gratuita • Pago en el acto • Operaciones seguras
          </p>
        </div>
        <div className="flex items-center md:justify-end gap-4 text-sm">
          <a href="#servicios" className="hover:text-brand-300">
            Servicios
          </a>
          <a href="#tasacion" className="hover:text-brand-300">
            Tasación
          </a>
          <a href="#divisas" className="hover:text-brand-300">
            Divisas
          </a>
          <a href="#preguntas" className="hover:text-brand-300">
            Preguntas
          </a>
          <a href="#contacto" className="hover:text-brand-300">
            Contacto
          </a>
          <a href="https://brownmelanie.com">
            <img src={dev} alt="Brown Melanie"  className="w-8"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
