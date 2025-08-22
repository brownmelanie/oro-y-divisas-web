import { WA_LINK } from "../lib/constants"
import whatsApp from "/whatsappLogo.svg"

export default function FloatingWA() {
    return (
        <a href={WA_LINK} target="_blank" className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full gold-gradient text-neutral-900 font-extrabold shadow-xl">
            <img src={whatsApp}/>
        </a>
    )
}