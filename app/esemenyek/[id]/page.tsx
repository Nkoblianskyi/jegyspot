import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Info, Ticket, ExternalLink } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EventCard from "@/components/event-card"
import { allEvents, getEventById, getEventDescription, partners } from "@/lib/events"

function getPartnerPrices(priceFrom: number) {
  const base = priceFrom
  return partners.map((p, i) => ({
    name: p.name,
    price: Math.round(base * (0.92 + (i % 5) * 0.04) / 100) * 100,
  }))
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const eventId = parseInt(id, 10)
  if (Number.isNaN(eventId)) notFound()

  const event = getEventById(eventId)
  if (!event) notFound()

  const description = getEventDescription(event.id)
  const partnerPrices = getPartnerPrices(event.priceFrom)
  const lowestPrice = Math.min(...partnerPrices.map((r) => r.price))
  const related = allEvents.filter((e) => e.id !== event.id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero: image full bleed, content in a bottom overlay card */}
        <section
          className="relative min-h-[320px] md:min-h-[400px] bg-primary"
          aria-label={event.title}
          style={{ backgroundImage: `url(${event.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
            <div className="max-w-6xl mx-auto">
              <Link href="/esemenyek" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-3">
                <ArrowLeft className="w-4 h-4" /> Összes esemény
              </Link>
              <div className="bg-card rounded-xl border border-border p-4 md:p-6 shadow-lg">
                <span className="inline-block rounded-md bg-accent/20 text-accent px-2 py-0.5 text-xs font-semibold uppercase mb-2">
                  {event.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.venue}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer: slim bar */}
        <div className="bg-muted/60 border-y border-border py-2.5 px-4">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="w-4 h-4 text-accent shrink-0" />
            <span>A Jegyspot független összehasonlító. Nem adunk el jegyeket. A vásárlás a kiválasztott partner oldalán történik.</span>
          </div>
        </div>

        {/* Content: main + sidebar */}
        <section className="max-w-6xl mx-auto px-4 py-10" aria-labelledby="about-heading">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 id="about-heading" className="text-xl font-bold text-foreground mb-3">
                Az eseményről
              </h2>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-border bg-muted/30 p-5 sticky top-24">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Részletek</h3>
                <dl className="space-y-3 text-sm">
                  <div><dt className="text-muted-foreground">Dátum</dt><dd className="font-medium text-foreground">{event.date}</dd></div>
                  <div><dt className="text-muted-foreground">Helyszín</dt><dd className="font-medium text-foreground">{event.venue}</dd></div>
                  <div><dt className="text-muted-foreground">Kategória</dt><dd className="font-medium text-foreground">{event.category}</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Prices: card per partner instead of table */}
        <section className="bg-muted/30 py-12 px-4" aria-labelledby="tickets-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="tickets-heading" className="text-xl md:text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
              <Ticket className="w-6 h-6 text-accent" /> Árak összehasonlítása
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              A Jegyspot nem ad el jegyeket – összehasonlítjuk a partnereink árait. Legjobb ár:{" "}
              <strong className="text-accent">{lowestPrice.toLocaleString("hu-HU")} Ft</strong> tól.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnerPrices.map((row, i) => {
                const partner = partners[i]
                const isLowest = row.price === lowestPrice
                return (
                  <div
                    key={row.name}
                    className={`rounded-xl border p-4 bg-card transition-shadow hover:shadow-md ${isLowest ? "border-accent ring-1 ring-accent/30" : "border-border"}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-semibold text-foreground">{row.name}</span>
                      {isLowest && <span className="text-xs font-bold text-accent bg-accent/15 px-2 py-0.5 rounded">legjobb</span>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{partner.specialty}</p>
                    <p className={`text-xl font-bold mb-3 ${isLowest ? "text-accent" : "text-foreground"}`}>
                      {row.price.toLocaleString("hu-HU")} Ft
                    </p>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
                    >
                      Ajánlat <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 py-12" aria-labelledby="more-heading">
            <h2 id="more-heading" className="text-xl font-bold text-foreground mb-6">További események</h2>
            <ul className="space-y-4">
              {related.map((e) => (
                <li key={e.id}>
                  <EventCard event={e} size="compact" />
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
