
import React from 'react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800 glass dark:bg-dark-bg/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l9-18 9 18" />
            <path d="M5 21h14" />
          </svg>
          <span className="font-bold text-xl tracking-tight dark:text-white">
            Axiom<span className="font-light">Tech</span><span className="text-primary">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-slate-600 dark:text-slate-300">
          <a className="hover:text-primary transition-colors" href="#results">Resultados</a>
          <a className="hover:text-primary transition-colors" href="#solucoes">Soluções</a>
          <a className="hover:text-primary transition-colors" href="#portfolio">Portfólio</a>
          <a className="hover:text-primary transition-colors" href="#precos">Planos</a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-icons text-slate-500">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a
            href="#booking"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-primary/20"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
