import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Users, 
  Mail, 
  Lock, 
  AlertCircle, 
  DollarSign, 
  Rocket,
  Chrome,
  Globe,
  Compass,
  Layout
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 opacity-50" /> : <ChevronDown className="w-5 h-5 opacity-50" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-brand selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-brand fill-brand" />
            <span className="text-xl font-bold tracking-tight">Unlovable</span>
          </div>
          <button 
            onClick={scrollToPricing}
            className="bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all brand-glow-hover active:scale-95"
          >
            Assinar agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-radial from-brand/30 to-transparent blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-white/60 mb-8">
              <span className="w-2 h-2 bg-brand rounded-full inline-block mr-2 animate-pulse" />
              Extensão para Chrome
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              Nunca mais <span className="text-brand">compre créditos</span> no Lovable
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Com a nossa extensão você tem créditos ilimitados. Você nunca mais vai precisar pensar em créditos no Lovable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all brand-glow-hover group"
              >
                Créditos + projetos ilimitados
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold text-lg hover:bg-white/5 transition-all"
              >
                Como funciona?
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browser Compatibility */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-12">
            Funciona perfeitamente com
          </p>
          
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center py-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center">
                  {[
                    { name: 'Chrome', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_128x128.png' },
                    { name: 'Firefox', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_128x128.png' },
                    { name: 'Safari', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_128x128.png' },
                    { name: 'Edge', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_128x128.png' },
                    { name: 'Opera', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_128x128.png' },
                    { name: 'Brave', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/brave/brave_128x128.png' },
                    { name: 'Vivaldi', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_128x128.png' },
                    { name: 'Arc', url: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/arc/arc_128x128.png' }
                  ].map((browser) => (
                    <div key={browser.name} className="flex items-center gap-4 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-default">
                      <img 
                        src={browser.url} 
                        alt={browser.name} 
                        className="w-10 h-10 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-sm font-bold tracking-wider text-white/40 group-hover:text-white transition-colors">{browser.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] font-bold tracking-[0.2em] uppercase text-brand mb-6">
              O Problema
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Lovable "barato" que sai <span className="text-brand">caro</span>
            </h2>
            <p className="text-xl text-white/40 mt-6 max-w-2xl mx-auto">
              Se você cria de verdade, já sentiu na pele o peso do modelo de créditos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertCircle className="w-6 h-6 text-brand" />,
                title: "Medo de clicar",
                desc: "Você pensa duas vezes antes de pedir uma nova variação. A criatividade trava quando cada tentativa custa crédito."
              },
              {
                icon: <DollarSign className="w-6 h-6 text-brand" />,
                title: "Conta surpresa",
                desc: "No fim do mês, a fatura parece mais um castigo do que uma ferramenta de produtividade. Cada \"gera de novo\" come seus créditos."
              },
              {
                icon: <Rocket className="w-6 h-6 text-brand" />,
                title: "Resultado meia-boca",
                desc: "Você evita experimentar para economizar crédito e entrega um projeto medíocre. O modelo de créditos não foi feito para quem precisa iterar."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl glass border border-white/5 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] font-bold tracking-[0.2em] uppercase text-brand mb-6">
              A Solução
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Use o Lovable <span className="text-brand">sem limites</span>
            </h2>
            <p className="text-xl text-white/40 mt-6 max-w-2xl mx-auto">
              Nossa extensão remove a ansiedade dos créditos. Instale, ative e crie sem culpa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "30 dias de liberdade",
                  desc: "Use a extensão à vontade durante todo o mês da sua assinatura. Sem limites diários, sem contadores."
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Sem consumo de créditos",
                  desc: "A extensão opera sem gastar os créditos do Lovable. Seu saldo continua intocado."
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "Itere sem culpa",
                  desc: "Refaça, teste e polir projetos sem olhar para a barrinha de créditos. Erre rápido, acerte forte."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <div className="text-brand">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full" />
              <div className="relative glass rounded-[40px] p-8 border border-white/10 aspect-square flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Heart className="w-32 h-32 text-brand fill-brand mb-8 mx-auto animate-float" />
                  <div className="space-y-4">
                    <div className="h-4 w-48 bg-white/10 rounded-full mx-auto" />
                    <div className="h-4 w-32 bg-white/10 rounded-full mx-auto" />
                    <div className="h-4 w-40 bg-white/10 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-24 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            
            {[
              {
                step: "01",
                title: "Assine o plano",
                desc: "Pagamento único de R$ 57 para 30 dias completos de uso. Sem taxas extras, sem surpresas."
              },
              {
                step: "02",
                title: "Ative a extensão",
                desc: "Receba sua licença por e-mail, instale a extensão no Chrome e ative com um clique."
              },
              {
                step: "03",
                title: "Crie sem medo",
                desc: "Use o Lovable sem gastar créditos com a extensão ativa. Teste, refaça e itere quantas vezes quiser."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 relative">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-black z-10 brand-glow">
                  {item.step}
                </div>
                <div className="glass p-10 rounded-[32px] border border-white/5 flex-grow">
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-xl text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <Mail className="w-8 h-8 text-brand" />
            </div>
            <h4 className="text-2xl font-bold">Licença por e-mail</h4>
            <p className="text-white/50 leading-relaxed">Após o pagamento, a licença chega direto no seu e-mail. Sem burocracia, sem espera.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <Clock className="w-8 h-8 text-brand" />
            </div>
            <h4 className="text-2xl font-bold">Ativação instantânea</h4>
            <p className="text-white/50 leading-relaxed">Instale a extensão e comece a usar em menos de 2 minutos. Zero configuração.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <Users className="w-8 h-8 text-brand" />
            </div>
            <h4 className="text-2xl font-bold">Para times e freelancers</h4>
            <p className="text-white/50 leading-relaxed">Perfeita para devs, designers, product owners e agências que vivem no Lovable.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] font-bold tracking-[0.2em] uppercase text-brand mb-6">
              Investimento
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Um preço. <span className="text-brand">Zero surpresas.</span>
            </h2>
            <p className="text-xl text-white/40 mt-6 max-w-2xl mx-auto">
              Sem taxas escondidas, sem cobrança por clique, sem susto no fim do mês.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Monthly Plan */}
            <div className="relative group">
              <div className="absolute -inset-px bg-brand/50 rounded-[40px] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative glass p-12 rounded-[40px] border border-white/10 flex flex-col h-full">
                <div className="mb-8">
                  <span className="bg-brand text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Mais Popular</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Plano Mensal</h3>
                <p className="text-white/50 mb-8">Tudo que você precisa para criar sem limites</p>
                <div className="flex items-baseline gap-2 mb-12">
                  <span className="text-5xl font-black">R$ 57</span>
                  <span className="text-white/40">/mês</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {[
                    "30 dias de uso da extensão",
                    "Sem consumo de créditos do Lovable",
                    "Upload de até 5 imagens por prompt",
                    "Licença enviada por e-mail",
                    "Suporte prioritário"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <Check className="w-5 h-5 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://pay.kirvano.com/8dba3c21-9c82-4988-8632-bf6af5765b41?aff=8e49b785-24e0-4888-967f-dc0b8ee417eb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand hover:bg-brand-hover text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all brand-glow-hover active:scale-95"
                >
                  Quero parar de queimar créditos
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-white/30 text-xs mt-6">Checkout seguro. Acesso imediato após pagamento.</p>
              </div>
            </div>

            {/* Quarterly Plan */}
            <div className="relative group">
              <div className="absolute -inset-px bg-brand/50 rounded-[40px] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative glass p-12 rounded-[40px] border border-white/10 flex flex-col h-full">
                <div className="mb-8">
                  <span className="bg-brand text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Melhor Custo-Benefício</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Plano Trimestral</h3>
                <p className="text-white/50 mb-8">3 meses de uso com desconto</p>
                <div className="flex items-baseline gap-2 mb-12">
                  <span className="text-5xl font-black">R$ 167</span>
                  <span className="text-white/40">/trimestre</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {[
                    "90 dias de uso da extensão",
                    "Sem consumo de créditos do Lovable",
                    "Upload de até 5 imagens por prompt",
                    "Licença enviada por e-mail",
                    "Suporte prioritário"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <Check className="w-5 h-5 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://pay.kirvano.com/dae3d453-a623-441e-88a0-7830c27bc27f?aff=1e8c977b-2b89-4807-a361-0e2a71742607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand hover:bg-brand-hover text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all brand-glow-hover active:scale-95"
                >
                  Economize com 3 meses
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-white/30 text-xs mt-6">Checkout seguro. Acesso imediato após pagamento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] font-bold tracking-[0.2em] uppercase text-brand mb-6">
              Duvidas?
            </span>
            <h2 className="text-5xl font-bold tracking-tighter">Perguntas frequentes</h2>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="Eu realmente não gasto créditos do Lovable?"
              answer="Exatamente. O uso da extensão durante o seu mês de assinatura não consome créditos adicionais do Lovable. Você usa a ferramenta sem aquele medo constante de 'estar queimando crédito à toa'."
            />
            <FAQItem 
              question="Quanto tempo dura o acesso?"
              answer="O acesso dura 30 dias no plano mensal ou 90 dias no plano trimestral, contados a partir da data de ativação da sua licença."
            />
            <FAQItem 
              question="Para quem essa extensão é perfeita?"
              answer="Para qualquer pessoa que use o Lovable profissionalmente ou para projetos pessoais complexos que exigem muitas iterações. Se você sente que o limite de créditos trava sua criatividade, essa extensão é para você."
            />
            <FAQItem 
              question="Como recebo minha licença?"
              answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com sua chave de licença e as instruções simples para instalar e ativar a extensão no seu navegador."
            />
            <FAQItem 
              question="Funciona em qual navegador?"
              answer="A extensão foi desenvolvida para o Google Chrome, mas funciona perfeitamente em qualquer navegador baseado em Chromium, como Microsoft Edge, Brave e Opera."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 opacity-50 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
            Pronto para criar sem medo da barrinha de créditos?
          </h2>
          <button 
            onClick={scrollToPricing}
            className="bg-brand hover:bg-brand-hover text-white px-12 py-6 rounded-full font-black text-2xl transition-all brand-glow-hover active:scale-95 flex items-center justify-center gap-3 mx-auto"
          >
            Assinar agora por R$ 57/mês
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-white/40 mt-12 text-lg">Junte-se a centenas de criadores que já usam o Lovable com liberdade total.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/30 text-sm">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Unlovable. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
