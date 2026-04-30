"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Currículo Profissional",
    description: "Ideal para quem precisa de um currículo otimizado para o mercado tech",
    price: "R$ 150",
    priceNote: "a partir de",
    period: "pagamento único",
    features: [
      "Análise do perfil profissional",
      "Currículo estratégico ATS-friendly",
      "Formatação profissional",
      "Destaque de competências técnicas",
      "Revisão ortográfica",
      "Entrega em 5 dias úteis",
    ],
    cta: "Contratar",
    popular: false,
  },
  {
    name: "LinkedIn + Redes + ATS",
    description: "O pacote mais procurado para posicionamento profissional completo",
    price: "R$ 400",
    priceNote: "de R$ 400 a R$ 690",
    period: "conforme complexidade",
    features: [
      "Tudo do Currículo Profissional",
      "Otimização completa do LinkedIn",
      "Headline e resumo estratégicos",
      "Palavras-chave para sistemas ATS",
      "Estratégias de networking",
      "Dicas de engajamento",
      "Entrega em 7 dias úteis",
      "1 rodada de ajustes",
    ],
    cta: "Contratar",
    popular: true,
  },
  {
    name: "Consultoria Completa",
    description: "Para quem quer transformação total de carreira e posicionamento premium",
    price: "R$ 800",
    priceNote: "de R$ 800 a R$ 1.700",
    period: "conforme necessidade",
    features: [
      "Tudo do pacote LinkedIn + Redes",
      "Consultoria estratégica de carreira",
      "Diagnóstico profissional completo",
      "Preparação para entrevistas",
      "Simulação de entrevistas",
      "Acompanhamento personalizado",
      "Sessões de mentoria 1:1",
      "Suporte por 30 dias",
    ],
    cta: "Falar com Maah",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Investimento
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Planos{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Acessíveis
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Investimento que cabe no seu bolso para transformar sua carreira. 
            Valores justos com resultados reais.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border bg-card p-8 transition-all ${
                plan.popular
                  ? "border-primary ring-2 ring-primary/20 scale-105 lg:scale-110"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 rounded-bl-xl bg-primary px-4 py-1">
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary-foreground">
                    <Zap className="h-3 w-3" />
                    Mais Procurado
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.priceNote}</p>
                <p className="text-xs text-muted-foreground">{plan.period}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold gap-2 ${
                  plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                size="lg"
                asChild
              >
                <a href="https://wa.me/5511971725371" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Dúvidas sobre qual plano escolher?{" "}
            <a 
              href="https://wa.me/5511971725371" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Fale comigo no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
