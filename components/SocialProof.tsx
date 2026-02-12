
import React from 'react';

const SocialProof: React.FC = () => {
  const logos = [
    { name: 'Eunaman', url: '/logos/eunaman.png' },
    { name: 'Fazenda Santa Fé', url: '/logos/fazenda-santa-fe.png' },
    { name: 'Malut Pneus', url: '/logos/malut-pneus.png' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-12 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Empresas que confiam na minha estratégia
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.url} alt={logo.name} className="h-12 md:h-16 w-auto object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
