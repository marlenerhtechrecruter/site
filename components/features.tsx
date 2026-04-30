"use client"

import { Badge } from "@/components/ui/badge"
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  MessageCircle,
  Zap 
} from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Metodologia comprovada com +600 profissionais recolocados em grandes empresas de tecnologia.",
  },
  {
    icon: Users,
    title: "Visão de Recrutador",
    description: "Insights exclusivos de quem está do outro lado da mesa, conduzindo processos seletivos diariamente.",
  },
  {
    icon: TrendingUp,
    title: "Posicionamento Estratégico",
    description: "Não é só sobre currículo. É sobre comunicar seu valor e se destacar no mercado competitivo.",
  },
  {
    icon: Award,
    title: "+7 Anos de Experiência",
    description: "Atuação em empresas como NTT DATA e Foursys, recrutando para as maiores techs do Brasil.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Humanizado",
    description: "Cada profissional é único. Mentoria personalizada de acordo com seus objetivos e momento de carreira.",
  },
  {
    icon: Zap,
    title: "Conteúdo Atualizado",
    description: "Estratégias alinhadas com as últimas tendências do mercado tech e práticas de recrutamento.",
  },
]

export function Features() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Diferenciais
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Maah
            </span>
            ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Combinação única de experiência em recrutamento tech, visão estratégica de carreira 
            e compromisso real com a sua recolocação.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
