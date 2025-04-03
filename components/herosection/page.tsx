import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Sua Plataforma Completa
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Transforme sua experiência digital com nossa solução inovadora. Simples, rápida e eficiente.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/">
              <Button size="lg">Começar Agora</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

