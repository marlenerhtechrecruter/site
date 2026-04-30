"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo leva para entregar o currículo?",
    answer:
      "O currículo profissional é entregue em até 5 dias úteis após o preenchimento do formulário de briefing. Para pacotes mais completos (LinkedIn + Redes), o prazo é de 7 dias úteis. A consultoria completa tem prazo de 15 dias úteis para entrega de todos os materiais.",
  },
  {
    question: "Como funciona a consultoria completa de carreira?",
    answer:
      "A consultoria completa inclui: análise do seu perfil profissional, criação de currículo estratégico, otimização completa do LinkedIn, sessões de mentoria 1:1, preparação para entrevistas (incluindo simulações) e acompanhamento por 30 dias. É o pacote ideal para quem quer uma transformação total de posicionamento.",
  },
  {
    question: "O que significa currículo ATS-friendly?",
    answer:
      "ATS (Applicant Tracking System) são sistemas automatizados que as empresas usam para filtrar currículos. Um currículo ATS-friendly é otimizado com palavras-chave estratégicas, formatação adequada e estrutura que passa pelos filtros automatizados, aumentando suas chances de chegar ao recrutador.",
  },
  {
    question: "Você trabalha com profissionais de todas as áreas de tecnologia?",
    answer:
      "Sim! Tenho experiência recrutando para diversas áreas: Desenvolvedores (Java, .NET, React, Node.js, Angular), QA, DevOps, Data (Analytics, Engineering, Science), Product, Design, Infra, Cloud, Security e posições de liderança tech. Entendo as especificidades de cada área.",
  },
  {
    question: "Como é o treinamento para outros Tech Recruiters?",
    answer:
      "O treinamento é voltado para profissionais de RH que querem se especializar em recrutamento tech ou Tech Recruiters que querem aprimorar suas técnicas. Abordamos: entendimento de stacks e tecnologias, sourcing estratégico, uso de IA no recrutamento, condução de entrevistas técnicas e gestão de processos seletivos.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim! Aceito pagamento via PIX (com desconto) ou cartão de crédito parcelado. Para valores e condições específicas, entre em contato pelo WhatsApp que conversamos sobre a melhor forma de pagamento para você.",
  },
  {
    question: "E se eu não ficar satisfeito com o serviço?",
    answer:
      "Meu compromisso é com a sua satisfação. Todos os serviços incluem revisões para garantir que o resultado final esteja alinhado com suas expectativas. Trabalhamos juntos até você estar 100% satisfeito com o material entregue.",
  },
  {
    question: "Por que devo contratar uma mentora que é recrutadora?",
    answer:
      "Porque estou dos dois lados da mesa! Sei exatamente o que os recrutadores procuram, quais erros eliminam candidatos e o que faz um perfil se destacar. Essa visão privilegiada de quem conduz processos seletivos diariamente faz toda diferença na construção do seu posicionamento profissional.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Tire suas dúvidas sobre os serviços. Se não encontrar sua resposta, 
            me chama no WhatsApp.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
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
