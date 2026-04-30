"use client"

import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "Desenvolvedor Full Stack",
    company: "Empresa Multinacional",
    content:
      "A mentoria da Maah foi transformadora! Ela me ajudou a estruturar meu currículo de forma estratégica e otimizar meu LinkedIn. Em menos de 2 meses já estava em processo seletivo em várias empresas.",
    rating: 5,
    image: "RA",
    recolocation: true,
  },
  {
    name: "Camila Ferreira",
    role: "QA Engineer",
    company: "NTT DATA",
    content:
      "Estava há 8 meses procurando emprego sem sucesso. Depois da consultoria com a Maah, entendi o que estava fazendo errado. Reformulei tudo e fui contratada em 3 semanas!",
    rating: 5,
    image: "CF",
    recolocation: true,
  },
  {
    name: "Felipe Santos",
    role: "Tech Recruiter",
    company: "Consultoria Tech",
    content:
      "O treinamento para Tech Recruiters é completo e prático. Aprendi técnicas de sourcing e uso de IA que aumentaram minha produtividade em 200%. Super recomendo!",
    rating: 5,
    image: "FS",
    recolocation: false,
  },
  {
    name: "Ana Paula Costa",
    role: "Product Manager",
    company: "Fintech",
    content:
      "A Maah tem uma visão única por estar dos dois lados - como recrutadora e mentora. O feedback dela sobre meu posicionamento foi certeiro. Consegui uma proposta 40% maior que meu salário anterior.",
    rating: 5,
    image: "AC",
    recolocation: true,
  },
  {
    name: "Bruno Oliveira",
    role: "DevOps Engineer",
    company: "Startup Scale-up",
    content:
      "Achava que meu currículo estava bom, mas a Maah mostrou vários pontos que eu poderia melhorar. O novo currículo ATS-friendly fez toda diferença nas candidaturas.",
    rating: 5,
    image: "BO",
    recolocation: true,
  },
  {
    name: "Mariana Lima",
    role: "Data Analyst",
    company: "Grande Varejo",
    content:
      "A consultoria completa valeu cada centavo. LinkedIn otimizado, currículo estratégico e preparação para entrevistas. Me senti muito mais confiante e preparada. Resultado: contratada!",
    rating: 5,
    image: "ML",
    recolocation: true,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Depoimentos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Histórias de Sucesso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Mais de 600 profissionais já transformaram suas carreiras com a mentoria da Maah.
            Confira alguns depoimentos reais.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              {testimonial.recolocation && (
                <Badge className="absolute top-4 right-4 bg-green-500/10 text-green-400 border-green-500/20">
                  Recolocado
                </Badge>
              )}

              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
