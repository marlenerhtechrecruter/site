"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/30 blur-[150px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge - Removido asChild do div e movido o className para o link */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary hover:border-primary/60 hover:bg-primary/20 transition-all cursor-pointer">
              <a href="https://www.linkedin.com/in/marlenesouza/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>+222.880 seguidores no LinkedIn</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Aumente em até{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                90%
              </span>{" "}
              suas chances de ser chamado para entrevistas
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty lg:text-xl">
              Saia da invisibilidade com um currículo que destaca. Mentoria completa + 
              análise profissional + posicionamento no LinkedIn para acelerar sua recolocação.
            </p>

            {/* CTAs - Removido asChild dos botões */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 px-8 text-base font-semibold" asChild>
                <a href="https://wa.me/5511971725371?text=Ol%C3%A1%20Maah!%20Vim%20pelo%20site%20e%20quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o!" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Começar Minha Transformação
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 px-8 text-base border-primary/30 hover:bg-primary/10" asChild>
                <a href="#servicos">
                  <Sparkles className="h-4 w-4" />
                  Ver Serviços
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "222K+", label: "Seguidores" },
                { value: "600+", label: "Recolocações" },
                { value: "7+", label: "Anos" },
                { value: "98%", label: "Satisfação" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center">
              {/* Outer glow */}
              <div className="absolute h-[380px] w-[380px] rounded-full bg-primary/30 blur-[80px]" />
              <div className="absolute h-[280px] w-[280px] rounded-full bg-accent/20 blur-[60px]" />

              {/* Rotating neon ring */}
              <div
                className="absolute h-[360px] w-[360px] rounded-full sm:h-[400px] sm:w-[400px]"
                style={{
                  background:
                    "conic-gradient(from 0deg, #a855f7, #22c55e, #7c3aed, #10b981, #a855f7)",
                  padding: "3px",
                  borderRadius: "9999px",
                  animation: "spin 6s linear infinite",
                }}
              >
                <div className="h-full w-full rounded-full bg-background" />
              </div>

              {/* Static neon border ring */}
              <div className="absolute h-[350px] w-[350px] rounded-full border-2 border-primary/60 sm:h-[390px] sm:w-[390px]" />

              {/* Photo circle */}
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-4 border-background sm:h-[360px] sm:w-[360px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xt6uigpTlkm4h9quInqpPGwlmZeMhy.png"
                  alt="Marlene Souza - Tech Recruiter Specialist"
                  fill
                  className="object-cover object-top"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating badge left */}
              <div className="absolute -left-4 top-12 rounded-xl border border-primary/40 bg-card/95 px-4 py-2.5 shadow-xl shadow-primary/10 backdrop-blur sm:-left-10">
                <div className="text-xs text-muted-foreground">Especialista em</div>
                <div className="text-sm font-bold text-primary">Tech Recruiting</div>
              </div>

              {/* Floating badge right */}
              <div className="absolute -right-4 bottom-12 rounded-xl border border-accent/40 bg-card/95 px-4 py-2.5 shadow-xl shadow-accent/10 backdrop-blur sm:-right-10">
                <div className="text-xs text-muted-foreground">Profissionais</div>
                <div className="text-sm font-bold text-accent">+600 Recolocados</div>
              </div>

              {/* Badge top right with LinkedIn link */}
              <a href="https://www.linkedin.com/in/marlenesouza/" target="_blank" rel="noopener noreferrer" className="absolute -right-2 top-8 flex items-center gap-1.5 rounded-full border border-primary/50 bg-card/95 px-3 py-1.5 shadow-lg shadow-primary/20 backdrop-blur hover:border-primary hover:shadow-primary/40 transition-all sm:right-0 hover:scale-110">
                <Linkedin className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-xs font-semibold text-foreground">222K+</span>
              </a>
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className="mt-20 border-t border-border/50 pt-12">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Experiência em recrutamento para as maiores empresas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {["NTT DATA", "Foursys", "Google", "Amazon", "Microsoft", "Nubank", "iFood", "Mercado Livre"].map((company) => (
              <span key={company} className="text-lg font-semibold text-foreground/80">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}