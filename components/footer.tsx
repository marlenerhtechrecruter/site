"use client"

import Link from "next/link"
import { Sparkles, Linkedin, Instagram, Mail, Phone } from "lucide-react"

const footerLinks = {
  servicos: [
    { label: "Currículo", href: "#servicos" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marlenesouza/" },
    { label: "Consultoria", href: "#servicos" },
    { label: "Mentoria", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ],
  contato: [
    { label: "WhatsApp", href: "https://wa.me/5511971725371" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marlenesouza/" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:contato@maahtech.com.br" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/marlenesouza/", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Phone, href: "https://wa.me/5511971725371", label: "WhatsApp" },
  { icon: Mail, href: "mailto:contato@maahtech.com.br", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Maah<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Mentoria de carreira e recolocação profissional especializada no mercado de tecnologia. 
              +222.000 seguidores no LinkedIn e +600 profissionais recolocados.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
                    social.label === "LinkedIn"
                      ? "bg-gradient-to-br from-primary/30 to-primary/20 text-primary hover:from-primary/60 hover:to-primary/40 hover:shadow-lg hover:shadow-primary/30 scale-100 hover:scale-110"
                      : "bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground">Serviços</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`text-sm transition-colors ${
                      link.label === "LinkedIn"
                        ? "text-primary hover:text-primary font-medium flex items-center gap-1.5"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label === "LinkedIn" && <Linkedin className="h-3.5 w-3.5" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Navegação</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Contato</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`text-sm transition-colors flex items-center gap-1.5 ${
                      link.label === "LinkedIn"
                        ? "text-primary hover:text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label === "LinkedIn" && <Linkedin className="h-3.5 w-3.5" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                WhatsApp: (11) 97172-5371
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maah Tech Recruiter. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Marlene de Souza | São Paulo, SP
          </p>
        </div>
      </div>
    </footer>
  )
}
