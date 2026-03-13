"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import { Mail, Clock, MapPin, CheckCircle, X, Send } from "lucide-react"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const empty: FormState = { name: "", email: "", subject: "", message: "" }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = "A név megadása kötelező."
    if (!form.email.trim()) {
      e.email = "Az e-mail megadása kötelező."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Érvényes e-mail-címet adjon meg."
    }
    if (!form.subject.trim()) e.subject = "A tárgy megadása kötelező."
    if (!form.message.trim()) e.message = "Az üzenet megadása kötelező."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(empty)
    setErrors({})
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [ev.target.name]: ev.target.value }))
    setErrors((prev) => ({ ...prev, [ev.target.name]: undefined }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 px-4 border-b border-border bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Kapcsolat
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Kérdése van? Írjon nekünk – általában 1–2 munkanapon belül válaszolunk.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <Disclaimer />
        </div>

        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info: vertical list on left */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                <span className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm">E-mail</p>
                  <a href="mailto:info@jegyspot.com" className="text-accent text-sm font-medium hover:underline">
                    info@jegyspot.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                <span className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm">Válaszidő</p>
                  <p className="text-muted-foreground text-sm">Általában 1–2 munkanapon belül.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                <span className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm">Székhely</p>
                  <p className="text-muted-foreground text-sm">
                    1117 Budapest, Infopark sétány 1.<br />Infopark Budapest irodapark
                  </p>
                </div>
              </div>
            </div>
            {/* Form: right side */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Send className="w-5 h-5 text-accent" /> Üzenet küldése
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  {[
                    { name: "name" as const, label: "Név", type: "text", placeholder: "Pl. Kovács Péter", autoComplete: "name" },
                    { name: "email" as const, label: "E-mail", type: "email", placeholder: "pelda@email.hu", autoComplete: "email" },
                    { name: "subject" as const, label: "Tárgy", type: "text", placeholder: "Üzenet tárgya", autoComplete: "off" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="block text-sm font-medium text-foreground mb-1">
                        {f.label} <span className="text-destructive">*</span>
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        value={form[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        autoComplete={f.autoComplete}
                        aria-invalid={!!errors[f.name]}
                        className={`w-full px-3 py-2.5 rounded-lg border text-sm bg-background ${
                          errors[f.name] ? "border-destructive" : "border-border"
                        } focus:outline-none focus:ring-2 focus:ring-accent`}
                      />
                      {errors[f.name] && <p className="text-xs text-destructive mt-1">{errors[f.name]}</p>}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Üzenet <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Írja ide üzenetét…"
                      aria-invalid={!!errors.message}
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm bg-background resize-y ${
                        errors.message ? "border-destructive" : "border-border"
                      } focus:outline-none focus:ring-2 focus:ring-accent`}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90"
                  >
                    Elküldés
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-card border border-border rounded-xl shadow-xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 mb-4">
              <CheckCircle className="w-7 h-7 text-accent" />
            </span>
            <h2 id="success-title" className="text-xl font-bold text-foreground mb-2">
              Üzenet elküldve
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Köszönjük! Válaszunkat az <strong>info@jegyspot.com</strong> címen küldjük, általában 1–2 munkanapon belül.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90"
            >
              Bezárás
            </button>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="absolute top-4 right-4 p-2 text-background hover:text-white"
            aria-label="Bezárás"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
