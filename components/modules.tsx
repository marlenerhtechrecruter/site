"use client"

import { 
  FileText, 
  Linkedin, 
  Bot, 
  Users, 
  Target,
  Briefcase,
  CheckCircle2
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: FileText,
    title: "Currículo Profissional",
    description: "Criação de currículo estratégico focado em tecnologia, com palavras-chave otimizadas para ATS.",
    topics: [
      "Análise do seu perfil profissional",
      "Estruturação estratégica do CV",
      "Otimização para sistemas ATS",
      "Destaque das competências técnicas",
    ],
    price: "A partir de R$ 100",
    delivery: "5 dias úteis",
  },
  {
    icon: Linkedin,
    title: "LinkedIn + Redes + ATS",
    description: "Posicionamento completo no LinkedIn e otimização do perfil para recrutadores e sistemas de seleção.",
    topics: [
      "Otimização do perfil LinkedIn",
      "Headline e resumo estratégicos",
      "Palavras-chave para ATS",
      "Estratégias de networking digital",
    ],
    price: "De R$ 350 a R$ 600",
    delivery: "7 dias úteis",
    highlight: true,
  },
  {
    icon: Target,
    title: "Consultoria Completa de Carreira",
    description: "Pacote premium com posicionamento no LinkedIn, currículo e consultoria estratégica de carreira.",
    topics: [
      "Currículo profissional otimizado",
      "LinkedIn completo e estratégico",
      "Consultoria de posicionamento",
      "Preparação para entrevistas",
      "Acompanhamento personalizado",
    ],
    price: "De R$ 700 a R$ 1.500",
    delivery: "15 dias úteis",
  },
  {
    icon: Bot,
    title: "IA para Recrutadores",
    description: "Treinamento especializado no uso de IA para otimizar processos de recrutamento e seleção.",
    topics: [
      "ChatGPT para job descriptions",
      "Automação de sourcing",
      "Análise de perfis com IA",
      "Ferramentas de produtividade",
    ],
    price: "Consultar",
    delivery: "Curso online",
  },
  {
    icon: Users,
    title: "Treinamento para Tech Recruiters",
    description: "Formação completa para profissionais que querem atuar ou se especializar em recrutamento tech.",
    topics: [
      "Fundamentos do recrutamento tech",
      "Entendendo stacks e tecnologias",
      "Sourcing estratégico",
      "Entrevistas técnicas",
    ],
    price: "Consultar",
    delivery: "Módulos online",
  },
  {
    icon: Briefcase,
    title: "Mentoria Individual",
    description: "Acompanhamento personalizado para desenvolvimento de carreira e estratégias de recolocação.",
    topics: [
      "Diagnóstico de carreira",
      "Plano de ação personalizado",
      "Sessões de mentoria 1:1",
      "Feedback contínuo",
    ],
    price: "Consultar",
    delivery: "Sob demanda",
  },
]

export function Modules() {
  return (
    <section id="servicos" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Serviços
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Como Posso Te{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Ajudar
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Serviços especializados para acelerar sua carreira no mercado de tecnologia. 
            Do currículo à consultoria completa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:border-primary/50 ${
                service.highlight ? "border-primary/30 ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                </div>
              )}
              
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>

              <ul className="mt-4 space-y-2">
                {service.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div className="text-sm">
                  <span className="font-semibold text-primary">{service.price}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {service.delivery}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
