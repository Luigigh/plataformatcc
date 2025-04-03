import { Zap, Shield, BarChart, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Recursos Poderosos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Nossa plataforma oferece tudo que você precisa para ter sucesso
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-8">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Desempenho Rápido</h3>
            <p className="text-muted-foreground text-center">
              Otimizado para velocidade e eficiência, garantindo uma experiência fluida para todos os usuários.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Segurança Avançada</h3>
            <p className="text-muted-foreground text-center">
              Proteção de dados de última geração com criptografia e autenticação segura.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Análises Detalhadas</h3>
            <p className="text-muted-foreground text-center">
              Insights valiosos com relatórios personalizados e métricas em tempo real.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Colaboração em Equipe</h3>
            <p className="text-muted-foreground text-center">
              Ferramentas integradas para facilitar o trabalho em equipe e aumentar a produtividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

