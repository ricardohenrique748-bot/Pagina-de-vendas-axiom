
import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: 'lightbulb',
      title: 'Viabilidade Técnica',
      desc: 'Tem uma visão mas não sabe como executar? Nós traduzimos ideias abstratas em arquitetura de software sólida e planos de ação claros.',
      color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
    },
    {
      icon: 'architecture',
      title: 'Desenvolvimento Personalizado',
      desc: 'Cada projeto é único. Não usamos modelos prontos; construímos soluções sob medida que se adaptam perfeitamente às nuâncias do seu negócio.',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      icon: 'rocket_launch',
      title: 'Escalabilidade Real',
      desc: 'Comece com o essencial e cresça sem limites. Criamos bases tecnológicas robustas preparadas para evoluir junto com suas ambições.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Axiom Tech</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight dark:text-white leading-tight">
            Sua ideia vira <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Solução</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Não importa o segmento ou a complexidade. Se você pode imaginar, nós temos a engenharia para construir. Transformamos conceitos e desafios em realidade digital de alto impacto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${point.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                <span className="material-icons text-3xl">{point.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{point.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
