import Link from "next/link"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

type Event = {
  id: number
  title: string
  date: string
  venue: string
  category: string
  priceFrom: number
  image: string
}

type EventCardProps = {
  event: Event
  size?: "default" | "compact"
}

export default function EventCard({ event, size = "default" }: EventCardProps) {
  const compact = size === "compact"

  return (
    <Link
      href={`/esemenyek/${event.id}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl overflow-hidden"
      aria-label={`${event.title} – ${event.priceFrom.toLocaleString("hu-HU")} Ft`}
    >
      <article className="h-full flex flex-col sm:flex-row bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300">
        {/* Image: left or top, fixed aspect */}
        <div className="relative w-full sm:w-2/5 sm:min-w-[180px] aspect-[2/1] sm:aspect-auto sm:min-h-[140px] bg-muted shrink-0">
          <img
            src={event.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-foreground/80 text-background text-xs font-semibold uppercase">
            {event.category}
          </span>
          {!compact && (
            <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-accent text-accent-foreground text-xs font-bold">
              {event.priceFrom.toLocaleString("hu-HU")} Ft
            </span>
          )}
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-4 min-w-0">
          <div>
            <h2 className={`font-bold text-foreground leading-tight ${compact ? "text-sm" : "text-base md:text-lg"} line-clamp-2 mb-2`}>
              {event.title}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {event.date}
              </span>
              <span className="flex items-center gap-1 truncate max-w-[180px]">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="truncate">{event.venue}</span>
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            {compact ? (
              <span className="text-sm font-bold text-accent">{event.priceFrom.toLocaleString("hu-HU")} Ft</span>
            ) : (
              <span className="text-sm font-bold text-accent">{event.priceFrom.toLocaleString("hu-HU")} Ft-tól</span>
            )}
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-1.5 transition-all">
              Összehasonlítás <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
