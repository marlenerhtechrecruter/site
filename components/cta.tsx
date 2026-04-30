"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-purple-900/10 to-accent/10 p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[300px] w-[300px] translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/5 blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Vamos transformar sua carreira</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Pronto para dar o{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                próximo passo
              </span>
              ?
            </h2>

            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Junte-se aos mais de 600 profissionais que aceleraram suas carreiras com a minha mentoria. 
              Vamos conversar sobre seus objetivos?
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2 px-8 text-base font-semibold" asChild>
                <a href="https://wa.me/5511971725371" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-base gap-2" asChild>
                <a href="#planos">
                  Ver Planos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Atendimento personalizado • Resposta em até 24h • Sigilo total
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
