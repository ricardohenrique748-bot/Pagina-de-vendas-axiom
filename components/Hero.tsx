
import React from 'react';

interface HeroProps {
  onOpenAudit: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-[#f6f6f8] dark:bg-[#101622]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] opacity-50 dark:opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase text-slate-600 dark:text-slate-300">
              Software House & Strategy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight dark:text-white">
            Sistemas Inteligentes e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Aplicativos de Performance</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
            Axiom Tech: Sua parceira em inovação. Desenvolvemos softwares sob medida, desde aplicativos móveis intuitivos até sistemas corporativos complexos, focados em escalabilidade e resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenAudit}
              className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Iniciar Projeto</span>
              <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>


        </div>

        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>

          {/* Main Visual Container - Code Editor */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-[#1e1e1e] transform transition-transform duration-500 group-hover:-translate-y-2 min-h-[400px] font-mono text-sm">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#252526]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="ml-4 text-xs text-slate-400">App.tsx — Axiom Tech</div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-hidden leading-relaxed">
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">1</span>
                <div className="text-blue-400"><span className="text-purple-400">import</span> <span className="text-yellow-300">{`{ Future }`}</span> <span className="text-purple-400">from</span> <span className="text-[#ce9178]">'@axiom-tech/core'</span>;</div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">2</span>
                <div className="text-slate-500">// Inicializando Sistema Inteligente</div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">3</span>
                <div className="text-blue-400"><span className="text-purple-400">const</span> <span className="text-[#dcdcaa]">AxiomApp</span> = <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-300">{`{`}</span></div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">4</span>
                <div className="pl-4 text-blue-400"><span className="text-purple-400">return</span> (</div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">5</span>
                <div className="pl-8 text-blue-400">&lt;<span className="text-[#4ec9b0]">Future.Provider</span>&gt;</div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">6</span>
                <div className="pl-12 text-blue-400">&lt;<span className="text-[#4ec9b0]">SmartSolutions</span></div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">7</span>
                <div className="pl-16 text-blue-400"><span className="text-[#9cdcfe]">performance</span>=<span className="text-[#ce9178]">"maximum"</span></div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">8</span>
                <div className="pl-16 text-blue-400"><span className="text-[#9cdcfe]">security</span>=<span className="text-[#569cd6]">{`{true}`}</span></div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">9</span>
                <div className="pl-16 text-blue-400"><span className="text-[#9cdcfe]">scalability</span>=<span className="text-[#ce9178]">"infinite"</span></div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">10</span>
                <div className="pl-12 text-blue-400">/&gt;</div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">11</span>
                <div className="pl-8 text-blue-400">&lt;/<span className="text-[#4ec9b0]">Future.Provider</span>&gt;</div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">12</span>
                <div className="pl-4 text-blue-400">);</div>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none">13</span>
                <div className="text-blue-400"><span className="text-yellow-300">{`}`}</span>;</div>
              </div>
            </div>

            {/* Floating Status Card */}
            <div className="absolute bottom-6 right-6 p-4 bg-[#252526]/90 rounded-xl border border-white/10 shadow-xl backdrop-blur-md max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <span className="material-icons text-sm">check</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Build Successful</div>
                  <div className="text-[10px] text-slate-400">Just now</div>
                </div>
              </div>
              <div className="text-xs text-slate-400">
                Otimização completa. Pronto para o deploy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
