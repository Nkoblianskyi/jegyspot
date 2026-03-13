"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

const STORAGE_KEY = "jegyspot-cookie-consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Süti tájékoztató"
      className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-accent/30 bg-card shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex gap-3 flex-1 min-w-0">
          <span className="shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-accent" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm sm:text-base">Sütik használata</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              A Jegyspot sütiket használ a működéshez és a látogatottság elemzéséhez. Részletek:{" "}
              <Link href="/sutik" className="text-accent font-medium hover:underline">
                Sütik (cookie) tájékoztató
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={decline}
            className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Elutasítom
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-5 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
