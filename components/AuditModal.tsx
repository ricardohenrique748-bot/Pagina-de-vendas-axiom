
import React, { useState } from 'react';

interface AuditModalProps {
  onClose: () => void;
}

const AuditModal: React.FC<AuditModalProps> = ({ onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [appDescription, setAppDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !appDescription) return;

    setLoading(true);
    // Simulating AI Generation
    setTimeout(() => {
      setLoading(false);
      setShowDemo(true);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={onClose}></div>

      <div className={`bg-white dark:bg-[#0f172a] w-full ${showDemo ? 'max-w-4xl' : 'max-w-xl'} rounded-2xl shadow-2xl overflow-hidden relative z-10 transition-all duration-500`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold dark:text-white flex items-center gap-2">
              <span className="material-icons text-primary">smartphone</span>
              {showDemo ? 'Seu App Gerado' : 'Gerador de App IA'}
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
              <span className="material-icons">close</span>
            </button>
          </div>

          {!showDemo ? (
            <form onSubmit={handleGenerate} className="space-y-6">
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Descreva sua ideia e nossa IA criará um protótipo visual interativo do seu futuro aplicativo em segundos.
                Ideal para visualizar MVPs e validar conceitos.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Nome da Empresa / App</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ex: Axiom Delivery, FitTrack..."
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Como você imagina o App?</label>
                <textarea
                  rows={4}
                  value={appDescription}
                  onChange={(e) => setAppDescription(e.target.value)}
                  placeholder="Ex: Um app de delivery moderno, com tema escuro, foco em fotos grandes de comida e um checkout simplificado..."
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="animate-pulse">Criando Interface...</span>
                  </>
                ) : (
                  <>
                    <span className="material-icons">auto_fix_high</span>
                    Gerar Protótipo
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-start animate-in fade-in duration-500">
              {/* Phone Mockup */}
              <div className="mx-auto md:mx-0 relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/20">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

                {/* Screen Content */}
                <div className="w-full h-full bg-white dark:bg-[#0f172a] overflow-y-auto scrollbar-hide text-slate-900 dark:text-white relative">

                  {/* App Header */}
                  <header className="pt-12 pb-4 px-6 bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg rounded-b-3xl mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 flex justify-between items-center">
                      <div>
                        <div className="text-xs opacity-80 uppercase tracking-wider mb-1">Bem-vindo ao</div>
                        <h1 className="font-bold text-xl">{companyName}</h1>
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="material-icons text-sm">notifications</span>
                      </div>
                    </div>
                  </header>

                  {/* Body */}
                  <div className="px-5 pb-20 space-y-6">
                    {/* Hero Card */}
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden group">
                      <div className="relative z-10">
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded mb-2">NOVO</span>
                        <h2 className="font-bold text-lg leading-tight mb-2">A solução ideal para você</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{appDescription}</p>
                        <button className="mt-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold px-4 py-2 rounded-lg w-full">Começar Agora</button>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
                    </div>

                    {/* Features Grid */}
                    <div>
                      <h3 className="font-bold text-sm mb-3 px-1">Funcionalidades</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { icon: 'analytics', label: 'Dashboard', color: 'bg-blue-500' },
                          { icon: 'wallet', label: 'Carteira', color: 'bg-green-500' },
                          { icon: 'forum', label: 'Chat', color: 'bg-purple-500' },
                          { icon: 'settings', label: 'Ajustes', color: 'bg-orange-500' },
                        ].map((item, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors cursor-pointer flex flex-col items-center gap-2 text-center">
                            <div className={`w-8 h-8 ${item.color}/10 rounded-full flex items-center justify-center text-${item.color.replace('bg-', '')}`}>
                              <span className={`material-icons text-lg ${item.color.replace('bg-', 'text-')}`}>{item.icon}</span>
                            </div>
                            <span className="text-xs font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent List */}
                    <div>
                      <h3 className="font-bold text-sm mb-3 px-1">Atividades Recentes</h3>
                      <div className="space-y-3">
                        {[1, 2].map((_, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex-shrink-0"></div>
                            <div className="flex-1">
                              <div className="h-2 w-24 bg-slate-200 dark:bg-slate-600 rounded mb-1.5"></div>
                              <div className="h-2 w-16 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-4 flex justify-around items-center z-10">
                    <span className="material-icons text-primary">home</span>
                    <span className="material-icons text-slate-300">search</span>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-primary/30">
                      <span className="material-icons text-white">add</span>
                    </div>
                    <span className="material-icons text-slate-300">favorite</span>
                    <span className="material-icons text-slate-300">person</span>
                  </div>

                </div>
              </div>

              {/* Description & CTA */}
              <div className="flex-1 py-4 space-y-6">
                <div>
                  <h4 className="text-xl font-bold dark:text-white mb-2">Protótipo Gerado com Sucesso!</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Com base na sua descrição, criamos esta estrutura inicial focada em UX/UI moderna e conversão.
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl flex gap-3">
                  <span className="material-icons text-green-500">check_circle</span>
                  <div>
                    <div className="text-sm font-bold text-green-700 dark:text-green-400">Análise da IA</div>
                    <p className="text-xs text-green-600/80 dark:text-green-500/80 mt-1">
                      Identificamos que seu foco em "{appDescription.substring(0, 20)}..." requer uma navegação simplificada e CTAs claros para maximizar o engajamento.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/5599991754232?text=Olá, acabei de gerar um protótipo para o app ${companyName} e gostaria de desenvolver!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-hover transition-colors text-center shadow-lg shadow-primary/20"
                  >
                    Agendar Consultoria para Desenvolver
                  </a>
                  <button
                    onClick={() => setShowDemo(false)}
                    className="w-full border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-bold dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    Criar Novo Protótipo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditModal;
