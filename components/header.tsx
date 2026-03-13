"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Kezdőlap" },
  { href: "/esemenyek", label: "Események" },
  { href: "/partnerek", label: "Partnerek" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/kapcsolat", label: "Kapcsolat" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md">
      {/* Top bar: logo centered, then nav in a separate row inside a contained strip */}
      <div className="border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-2.5 min-w-0"
              aria-label="Jegyspot – Kezdőlap"
            >
              <img src="/favicon.ico" alt="" width={40} height={40} className="w-10 h-10 rounded-lg shrink-0" />
              <span className="text-lg md:text-xl font-bold text-foreground truncate">Jegyspot</span>
            </Link>

            <nav className="hidden md:flex items-center gap-0.5" aria-label="Főnavigáció">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="md:hidden p-2 -mr-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: full-width panel below, not overlay */}
      {open && (
        <div className="md:hidden border-t border-border bg-muted/30">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-0.5" aria-label="Mobilnavigáció">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium",
                  pathname === link.href ? "bg-accent/20 text-accent" : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
