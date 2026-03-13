import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const cookieTypes = [
  { name: "Szükséges sütik", desc: "A weboldal alapvető működéséhez szükségesek. Nem kapcsolhatók ki. Nem tárolnak személyes adatot.", examples: "Munkamenet, biztonsági token", duration: "Munkamenet végéig" },
  { name: "Analitikai sütik", desc: "Segítenek megérteni, hogyan használják a látogatók az oldalt. Az adatok anonimizáltak.", examples: "Oldallátogatások, statisztika", duration: "Legfeljebb 26 hónap" },
  { name: "Funkcionális sütik", desc: "Személyre szabott funkciókhoz (pl. beállítások megjegyzése).", examples: "Preferenciák mentése", duration: "Legfeljebb 1 év" },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-10 px-4 border-b border-border bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              Sütik (cookie-k)
            </h1>
            <p className="text-sm text-muted-foreground">Utoljára frissítve: 2026</p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10">
          <p className="text-muted-foreground text-sm leading-relaxed mb-10">
            A Jegyspot (jegyspot.com) a megfelelő működés és a szolgáltatás fejlesztése érdekében sütiket használ. Az alábbiakban röviden összefoglaljuk, milyen sütiket alkalmazunk és mire.
          </p>

          <h2 className="text-lg font-bold text-foreground mb-4">
            Milyen sütiket használunk?
          </h2>

          <div className="space-y-4 mb-10">
            {cookieTypes.map((ct) => (
              <article key={ct.name} className="rounded-xl border border-border p-5 bg-card">
                <h3 className="font-bold text-foreground mb-2">{ct.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{ct.desc}</p>
                <dl className="grid grid-cols-2 gap-2 text-xs">
                  <div><dt className="text-muted-foreground">Példák:</dt><dd className="text-foreground font-medium">{ct.examples}</dd></div>
                  <div><dt className="text-muted-foreground">Megőrzés:</dt><dd className="text-foreground font-medium">{ct.duration}</dd></div>
                </dl>
              </article>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <h2 className="text-base font-bold text-foreground mb-2">Sütik kezelése</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              A legtöbb böngészőben a sütik kezelése a beállításokban lehetséges. A nem szükséges sütik kikapcsolása egyes funkciókat befolyásolhat.
            </p>
            <p className="text-sm text-muted-foreground">
              Kérdés esetén:{" "}
              <Link href="mailto:info@jegyspot.com" className="text-accent font-medium hover:underline">
                info@jegyspot.com
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
