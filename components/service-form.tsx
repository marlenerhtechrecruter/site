"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Send, FileText, Linkedin, GraduationCap, Briefcase } from "lucide-react"

const services = [
  {
    id: "curriculo",
    name: "Currículo Profissional",
    price: "A partir de R$ 100",
    icon: FileText,
  },
  {
    id: "linkedin",
    name: "LinkedIn + Redes + ATS",
    price: "R$ 350 a R$ 600",
    icon: Linkedin,
  },
  {
    id: "consultoria",
    name: "Consultoria Completa de Carreira",
    price: "R$ 700 a R$ 1.500",
    icon: Briefcase,
  },
  {
    id: "treinamento",
    name: "Treinamento para Tech Recruiters",
    price: "Sob consulta",
    icon: GraduationCap,
  },
]

export function ServiceForm() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const service = selectedService
    const message = formData.get("message")
    
    // Montar mensagem para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá Maah! Vim pelo site e gostaria de saber mais sobre os serviços.\n\n` +
      `*Nome:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Serviço de interesse:* ${service}\n` +
      `*Mensagem:* ${message || "Gostaria de mais informações"}`
    )
    
    // Abrir WhatsApp
    window.open(`https://wa.me/5511971725371?text=${whatsappMessage}`, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contato" className="py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="flex flex-col items-center py-16 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/20">
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Solicitação Enviada!</h3>
              <p className="mb-6 text-muted-foreground">
                Você será redirecionado para o WhatsApp. Aguarde o contato da Maah em breve!
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Enviar nova solicitação
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Solicite seu Orçamento
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Transformar
            </span>{" "}
            sua Carreira?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Preencha o formulário abaixo e receba um atendimento personalizado para alcançar seus objetivos profissionais.
          </p>
          <div className="mt-6 flex justify-center">
            <a 
              href="https://www.linkedin.com/in/marlenesouza/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-2.5 hover:border-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Visite o LinkedIn da Maah</span>
            </a>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="mb-6 text-xl font-semibold">Escolha o serviço ideal para você</h3>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service.name)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/5 ${
                    selectedService === service.name
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card/50"
                  }`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                    selectedService === service.name ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{service.name}</div>
                    <div className="text-sm text-accent">{service.price}</div>
                  </div>
                  {selectedService === service.name && (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Formulário */}
          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Seus Dados</CardTitle>
              <CardDescription>
                Preencha suas informações para receber um atendimento personalizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="bg-input/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-input/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    className="bg-input/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço de interesse</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-input/50">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.name}>
                          {service.name} - {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte um pouco sobre seus objetivos..."
                    rows={3}
                    className="bg-input/50"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 text-base font-semibold">
                  <Send className="h-4 w-4" />
                  Enviar via WhatsApp
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Ao enviar, você será redirecionado para o WhatsApp da Maah
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
