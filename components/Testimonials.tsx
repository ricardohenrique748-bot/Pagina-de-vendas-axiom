
import React from 'react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Beatriz',
      role: 'CTO',
      company: 'LogiFleet',
      content: 'Não contratamos apenas devs, contratamos inteligência. A modernização do nosso sistema de frotas reduziu custos operacionais em 22% e zerou nossos problemas de escala.',
      avatar: '/images/testimonials/beatriz.png',
      rating: 5
    },
    {
      id: 2,
      name: 'Wadamy',
      role: 'Diretora de Inovação',
      company: 'MedSystem',
      content: 'Precisávamos de uma arquitetura segura para lidar com dados sensíveis de pacientes. A Axiom entregou uma solução robusta que suporta nossa expansão nacional.',
      avatar: '/images/testimonials/wadamy.png',
      rating: 5
    },
    {
      id: 3,
      name: 'Luiz',
      role: 'Founder',
      company: 'Startup X1',
      content: 'A capacidade deles de entender a visão de negócio e traduzir em código é única. Transformaram um conceito complexo em um MVP funcional em tempo recorde.',
      avatar: '/images/testimonials/luiz.png',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-900 border-t border-slate-800 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Confiança do Mercado</span>
          <h2 className="text-4xl font-extrabold tracking-tight">O que dizem os tomadores de decisão</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20">
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="material-icons text-lg">star</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-slate-300 leading-relaxed font-light italic relative">
                <span className="text-4xl text-slate-600 absolute -top-4 -left-2 opacity-30">"</span>
                {t.content}
              </p>
              <div className="flex items-center pt-6 border-t border-slate-700/50">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20 ring-offset-2 ring-offset-slate-800">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
