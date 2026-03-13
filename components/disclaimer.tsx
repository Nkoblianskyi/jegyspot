import { Info } from "lucide-react"

type DisclaimerProps = {
  variant?: "default" | "hero"
}

export default function Disclaimer({ variant = "default" }: DisclaimerProps) {
  const isHero = variant === "hero"

  return (
    <div
      className={
        isHero
          ? "w-full bg-foreground/90 text-background"
          : "rounded-xl border border-border bg-muted/50 px-4 py-3 flex gap-3 items-start text-sm leading-relaxed"
      }
    >
      <div className={isHero ? "max-w-6xl mx-auto px-4 py-3 flex gap-3 items-center" : "flex gap-3 items-start"}>
        <Info
          className={isHero ? "w-5 h-5 text-accent shrink-0" : "w-5 h-5 text-accent shrink-0 mt-0.5"}
          aria-hidden="true"
        />
        <p className={isHero ? "text-sm text-white/95" : "text-foreground"}>
          {isHero ? (
            <>
              A <strong className="text-white">Jegyspot</strong> független jegyár-összehasonlító.{" "}
              <strong className="text-white">Nem adunk el jegyeket.</strong> Összehasonlítjuk a partnereink (pl. Jegy.hu, Eventim, StubHub, Tixa) árait.
              Az „Ajánlat” gombra kattintva a partner weboldalára kerül; a vásárlás kizárólag a partnerrel jön létre.
            </>
          ) : (
            <>
              A <strong className="text-foreground">Jegyspot</strong> független jegyár-összehasonlító.{" "}
              <strong className="text-foreground">Nem adunk el jegyeket.</strong> Összehasonlítjuk a partnereink (pl. Jegy.hu, Eventim, StubHub, Tixa) árait.
              Az „Ajánlat” gombra kattintva a partner weboldalára kerül; a vásárlás kizárólag a partnerrel jön létre.
            </>
          )}
        </p>
      </div>
    </div>
  )
}
