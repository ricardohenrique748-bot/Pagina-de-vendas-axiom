
import React from 'react';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: 'R$ 500',
      period: '/mês',
      description: 'Para empresas que querem organizar o básico.',
      features: [
        'Plataforma AXIOM Web',
        'Cadastro e gestão básica de dados',
        'Dashboard padrão',
        'Integrações via API (básicas)',
        'Suporte padrão'
      ],
      setup: 'R$ 1.500,00',
      users: '3 usuários'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'R$ 1.000',
      period: '/mês',
      description: 'Para empresas que precisam controlar operação e financeiro.',
      features: [
        'Plataforma configurada conforme processo',
        'Gestão financeira e operacional',
        'Multicentro / multilojas',
        'Relatórios avançados',
        'Integrações ampliadas',
        'Suporte prioritário'
      ],
      setup: 'R$ 2.500,00',
      users: '10 usuários'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'R$ 1.800',
      period: '/mês',
      description: 'Para empresas que precisam escalar com automação.',
      features: [
        'Plataforma altamente configurável',
        'Automação de processos',
        'Fluxos inteligentes e alertas',
        'Integração entre áreas',
        'Suporte VIP',
        'SLA diferenciado'
      ],
      featured: true,
      setup: 'R$ 3.800,00',
      users: '25 usuários'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Sob Consulta',
      period: '',
      description: 'Solução corporativa totalmente sob medida.',
      features: [
        'Plataforma 100% adaptada ao processo',
        'Regras de negócio personalizadas',
        'Automações avançadas',
        'Integrações corporativas (ERP, BI, etc.)',
        'Dashboards executivos',
        'Governança, segurança e LGPD',
        'Atendimento dedicado e SLA'
      ],
      setup: 'Projeto sob medida'
    }
  ];

  return (
    <section id="precos" className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Investimento</h2>
          <p className="text-lg text-slate-400">
            Escolha o modelo de parceria ideal para a fase atual do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-3xl border relative flex flex-col h-full bg-[#0F172A] ${plan.featured ? 'border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.15)]' : 'border-slate-800'}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">
                  Mais Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? 'text-green-500' : 'text-blue-500'}`}>
                {plan.name}
              </h3>

              <p className="text-slate-400 text-sm mb-8 min-h-[40px]">
                {plan.description}
              </p>

              <div className="mt-auto">
                {plan.setup && (
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-2">
                    Setup: {plan.setup}
                  </p>
                )}

                <div className="mb-2">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
                </div>

                {plan.users && (
                  <p className={`text-sm font-bold flex items-center gap-2 ${plan.featured ? 'text-green-500' : 'text-blue-500'}`}>
                    <span className="material-icons text-base">group</span> {plan.users}
                  </p>
                )}

                {plan.features.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <p className="text-slate-400 text-sm mb-2">Inclui:</p>
                    <ul className="space-y-2">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-300">
                          <span className="material-icons text-green-500 text-sm mr-2 mt-0.5">check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
