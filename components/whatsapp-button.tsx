"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511971725371?text=Ol%C3%A1%20Maah!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 lg:h-16 lg:w-16"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 lg:h-8 lg:w-8" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold">
        1
      </span>
    </a>
  )
}
