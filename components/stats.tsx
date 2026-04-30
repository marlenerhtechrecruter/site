"use client"

import { Users, Briefcase, Building2, Award, Linkedin, Target } from "lucide-react"

const stats = [
  {
    icon: Linkedin,
    value: "222.880+",
    label: "Seguidores no LinkedIn",
    description: "Comunidade engajada de profissionais tech",
  },
  {
    icon: Briefcase,
    value: "600+",
    label: "Profissionais Recolocados",
    description: "Recolocações em grandes empresas nacionais e multinacionais",
  },
  {
    icon: Building2,
    value: "150+",
    label: "Empresas Atendidas",
    description: "Conexões diretas com o mercado tech",
  },
  {
    icon: Target,
    value: "7+",
    label: "Anos de Experiência",
    description: "Atuação em Recrutamento Tech de alto volume",
  },
]

export function Stats() {
  return (
    <section id="sobre" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Quem é{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Maah
            </span>
            ?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Marlene de Souza, conhecida como Maah, é Tech Recruiter Specialist com mais de 7 anos de experiência 
            em Recrutamento &amp; Seleção focado em Tecnologia. Já atuou em grandes empresas como NTT DATA e Foursys, 
            conduzindo processos estratégicos para perfis como Java, .NET, React, DevOps, Data e muito mais.
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Atualmente, além de atuar como recrutadora, oferece mentoria de carreira e criação de conteúdo estratégico, 
            ajudando profissionais a se posicionarem melhor no mercado de tecnologia.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-2 text-base font-semibold text-foreground">{stat.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
