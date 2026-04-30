"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, Linkedin } from "lucide-react"

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 items-center justify-between px-4 lg:px-8 max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Maah<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tech</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <a href="https://www.linkedin.com/in/marlenesouza/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://wa.me/5511971725371" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button size="sm" className="font-semibold" asChild>
            <a href="#planos">
              Contratar Mentoria
            </a>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full gap-2 justify-start" asChild>
                <a href="https://www.linkedin.com/in/marlenesouza/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <Linkedin className="h-4 w-4 text-primary" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" className="w-full" asChild>
                <a href="https://wa.me/5511971725371" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  WhatsApp
                </a>
              </Button>
              <Button className="w-full font-semibold" asChild>
                <a href="#planos" onClick={() => setMobileMenuOpen(false)}>
                  Contratar Mentoria
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
