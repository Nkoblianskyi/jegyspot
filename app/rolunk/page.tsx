import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import Link from "next/link"
import { ShieldCheck, Eye, Handshake, ArrowRight } from "lucide-react"

const values = [
  { icon: ShieldCheck, title: "Függetlenség", desc: "Nem állunk egyetlen jegyértékesítő érdekkörében sem. Objektívan összehasonlítjuk az ajánlatokat." },
  { icon: Eye, title: "Átláthatóság", desc: "Minden ár és partner nyíltan látható. Nincsenek rejtett díjak, csak a tények." },
  { icon: Handshake, title: "Megbízhatóság", desc: "Csak ellenőrzött, biztonságos partnerekkel dolgozunk. A felhasználók biztonsága az első." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section
          className="relative py-12 md:py-16 px-4 bg-muted/50 border-b border-border"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-background/80" />
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Rólunk
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              A Jegyspot egy független jegyár-összehasonlító platform. Egy helyen láthatóvá tesszük több partner árait.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <Disclaimer />
        </div>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Mi a Jegyspot?
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  A jegyvásárlás sokszor bonyolult: több oldalt kell böngészni, az árak nehezen összehasonlíthatók. A Jegyspot összegyűjti több partner ajánlatait egy felületen – ingyenesen, regisztráció nélkül.
                </p>
                <p>
                  Nem adunk el jegyeket. Csak összehasonlítunk. A vásárlás mindig a kiválasztott partnerrel jön létre.
                </p>
                <p>
                  A Jegyspot a jegyspot.com domain alatt működik, független szolgáltatóként.
                </p>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-xl border border-border p-6 bg-muted/30">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Röviden</h3>
                <dl className="space-y-4">
                  {[
                    { value: "6+", label: "Összehasonlított partner" },
                    { value: "0 Ft", label: "Használati díj" },
                    { value: "100%", label: "Független" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-baseline gap-3">
                      <dt className="text-2xl font-bold text-accent">{s.value}</dt>
                      <dd className="text-sm text-muted-foreground">{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <Link href="/kapcsolat" className="inline-flex items-center gap-1.5 mt-4 text-accent font-semibold text-sm hover:underline">
                  Kapcsolat <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground text-background py-12 px-4" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="values-heading" className="text-xl font-bold text-center mb-8">
              Értékeink
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="text-center p-6 rounded-xl bg-white/10 border border-white/20">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-3">
                    <v.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
