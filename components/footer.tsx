import Link from "next/link"

const pageLinks = [
  { href: "/esemenyek", label: "Események" },
  { href: "/partnerek", label: "Partnerek" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/kapcsolat", label: "Kapcsolat" },
]
const legalLinks = [
  { href: "/adatvedelem", label: "Adatvédelem" },
  { href: "/sutik", label: "Sütik" },
]

export default function Footer() {
  return (
    <footer className="mt-auto bg-foreground text-background">
      {/* Diagonal top edge effect via padding and inner bg */}
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--background)_0%),var(--foreground)] opacity-[0.03]" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          {/* Single row: Brand | Pages | Legal | Contact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <img src="/favicon.ico" alt="" width={40} height={40} className="w-10 h-10 rounded-full p-1 bg-white" />
                <span className="text-xl font-bold">Jegyspot</span>
              </Link>
              <p className="text-sm text-white/80 leading-relaxed max-w-[260px]">
                Független jegyár-összehasonlító. Nem értékesítünk jegyeket – csak összehasonlítjuk a partnereink árait.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Oldalak</p>
              <ul className="flex flex-col gap-2">
                {pageLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/85 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Jogi & Kapcsolat</p>
              <ul className="flex flex-col gap-2">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/85 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="mailto:info@jegyspot.com" className="mt-2 inline-block text-sm text-accent hover:underline">
                info@jegyspot.com
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs text-white/50 max-w-2xl">
              A Jegyspot független összehasonlító szolgáltatás. Nem adunk el jegyeket. Az „Ajánlat” gombra kattintva a partner oldalára kerül; a vásárlás a partnerrel jön létre.
            </p>
            <p className="mt-2 text-xs text-white/40">© {new Date().getFullYear()} Jegyspot. Minden jog fenntartva.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
