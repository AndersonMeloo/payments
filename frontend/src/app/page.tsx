import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, HandCoins, Heart, Shield, Zap } from "lucide-react";
import { signIn } from "@/lib/auth";

export default function Home() {

  async function handleRegiser() {

    "use server"
    await signIn("github", { redirectTo: '/dashboard' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">

      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center">
          <div className="flex items-center text-amber-500 font-bold text-xl">
            <HandCoins className="h-6 w-6 mr-2" />
            <span>PayHub</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">

        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                Gerencie seus recebimentos de forma inteligente
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-400">
                Uma plataforma moderna para profissionais e empreendedores controlarem seus pagamentos, saldos e clientes em um só lugar.
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Envie links de pagamento, receba de clientes e acompanhe todas as transações em tempo real, sem complicações.
              </p>

              <div className="pt-4">
                <form action={handleRegiser}>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 h-12"
                  >
                    Começar agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-amber-600" />}
              title="Receba com facilidade"
              description="Envie links de pagamento, receba de clientes e acompanhe todas as transações em tempo real, sem complicações."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-amber-600" />}
              title="Controle total"
              description="Veja seu saldo atual, o total já recebido e o histórico completo de movimentações de forma clara e organizada."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-amber-600" />}
              title="Relatórios automáticos"
              description="Visualize estatísticas detalhadas sobre seus ganhos e entenda melhor o fluxo financeiro do seu negócio."
            />
          </div>

        </div>
      </main>
    </div>
  );
}
