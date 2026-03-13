"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import EventCard from "@/components/event-card"
import { allEvents } from "@/lib/events"

const categories = ["Összes", "Koncert", "Fesztivál", "Sport", "Színház", "Egyéb"]

function EventsPageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 px-4 bg-primary" style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="h-14 w-full rounded-xl bg-white/20 animate-pulse" />
            <div className="h-10 mt-4 w-48 mx-auto rounded-lg bg-white/20 animate-pulse" />
          </div>
        </section>
        <div className="max-w-6xl mx-auto px-4 pt-8"><Disclaimer /></div>
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 rounded-xl bg-muted animate-pulse" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function EventsPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQ = searchParams.get("q") ?? ""
  const [query, setQuery] = useState(initialQ)
  const [activeCategory, setActiveCategory] = useState("Összes")

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      const q = query.trim().toLowerCase()
      const matchesQ = q === "" || e.title.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
      const matchesCat = activeCategory === "Összes" || e.category === activeCategory
      return matchesQ && matchesCat
    })
  }, [query, activeCategory])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    router.replace(`/esemenyek?q=${encodeURIComponent(query.trim())}`, { scroll: false })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero: narrow, search bar prominent */}
        <section
          className="relative py-14 md:py-20 px-4 bg-primary"
          aria-label="Események"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
              Események
            </h1>
            <p className="text-white/90 text-sm md:text-base mb-6 text-center">
              Keresse meg a programot, hasonlítsa össze a jegyárakat.
            </p>
            <form onSubmit={handleSearch} className="flex gap-2" role="search" aria-label="Keresés">
              <label htmlFor="events-search" className="sr-only">Keresés</label>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                <input
                  id="events-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Esemény, előadó, helyszín…"
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />
              </div>
              <button type="submit" className="px-4 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 shrink-0">
                Keresés
              </button>
            </form>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pt-6">
          <Disclaimer />
        </div>

        {/* Filters: horizontal scroll on mobile, inline on desktop */}
        <div className="max-w-6xl mx-auto px-4 py-4 border-b border-border">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" role="group" aria-label="Kategória">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`shrink-0 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat ? "bg-foreground text-background" : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List: single column of horizontal cards */}
        <section className="max-w-6xl mx-auto px-4 py-8" aria-label="Eseménylista">
          <p className="text-sm text-muted-foreground mb-6">
            <strong className="text-foreground">{filtered.length}</strong> esemény
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-16 rounded-xl bg-muted border border-border">
              <p className="text-muted-foreground">Nincs találat. Próbáljon más kategóriát vagy keresést.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {filtered.map((event) => (
                <li key={event.id}>
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function EventsPage() {
  return (
    <Suspense fallback={<EventsPageSkeleton />}>
      <EventsPageContent />
    </Suspense>
  )
}
