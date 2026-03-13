import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const sections = [
  { title: "1. Az adatkezelő", body: "A Jegyspot (a továbbiakban: „mi\", \"szolgáltató\") üzemelteti a jegyspot.com weboldalt. Kapcsolat: info@jegyspot.com." },
  { title: "2. Milyen adatokat kezelünk?", body: "A kapcsolati űrlap kitöltésekor a megadott név és e-mail cím a megkeresés megválaszolásához szükséges. Automatikusan, anonimizáltan gyűjtünk látogatottsági adatokat (pl. oldallátogatások) a szolgáltatás fejlesztése és a jogszabályi kötelezettségek teljesítése érdekében." },
  { title: "3. Az adatok felhasználása", body: "Az adatokat kizárólag a megkeresések megválaszolásához, a weboldal működtetéséhez és a jogszabályoknak megfelelően használjuk. Adatokat harmadik félnek nem adunk el." },
  { title: "4. Adatmegőrzés", body: "A kapcsolati üzenetekhez kapcsolódó adatokat legfeljebb 2 évig tároljuk. Az anonimizált analitikai adatokat legfeljebb 26 hónapig őrizzük meg." },
  { title: "5. Az Ön jogai", body: "A GDPR alapján Önnek joga van a személyes adataihoz való hozzáférésre, helyesbítésre, törlésre, illetve az adatkezelés korlátozására. Kérelmét az info@jegyspot.com címen küldheti." },
  { title: "6. Sütik", body: "A sütik kezeléséről a Sütik oldalon talál részletes tájékoztatást." },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-10 px-4 border-b border-border bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              Adatvédelmi tájékoztató
            </h1>
            <p className="text-sm text-muted-foreground">Utoljára frissítve: 2026</p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="border-l-4 border-accent pl-5 py-1">
                <h2 className="text-lg font-bold text-foreground mb-2">{section.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/sutik" className="text-accent font-semibold text-sm hover:underline">
              Sütik (cookie) tájékoztató
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
