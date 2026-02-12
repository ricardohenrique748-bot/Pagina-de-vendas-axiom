
import React from 'react';


const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: 'Logística V2',
      type: 'Sistema de Gestão de Frotas',
      challenge: 'Otimização de rotas complexas e monitoramento de ativos em tempo real para reduzir desperdícios.',
      result: '-22%',
      resultLabel: 'Custo Operacional',
      quote: 'O sistema se pagou em 3 meses. A visibilidade que temos hoje da operação é total.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
    },
    {
      title: 'Manutenção e Evolução',
      type: 'Manutenção e Evolução de Sistemas',
      challenge: 'Modernizar um sistema legado crítico de 15 anos sem interromper a linha de produção que opera 24/7.',
      result: '99.99%',
      resultLabel: 'Estabilidade (Uptime)',
      quote: 'Conseguimos modernizar toda nossa infraestrutura tecnológica sem um único minuto de parada na fábrica.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Portfolio Selecionado</span>
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight dark:text-white">Engenharia de Alto Impacto</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              De sistemas corporativos robustos a aplicativos que conquistam usuários. Veja como materializamos visões complexas em software funcional.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all group dark:text-white">
            Ver Todos os Projetos
            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-72 overflow-hidden relative">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-xs font-bold text-primary-300 mb-3">
                    {c.type}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{c.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      O Desafio
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Resultado
                    </h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{c.result}</span>
                      <span className="text-xs font-bold text-slate-500 uppercase">{c.resultLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-slate-200 dark:text-slate-700 font-serif opacity-50">"</span>
                  <p className="text-slate-700 dark:text-slate-300 italic relative z-10 pl-6">
                    {c.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all group dark:text-white">
            Ver Todos os Projetos
            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
