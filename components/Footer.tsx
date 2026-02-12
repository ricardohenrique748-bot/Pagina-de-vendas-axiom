
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#f6f6f8] dark:bg-[#101622] border-t border-slate-200 dark:border-slate-800 text-slate-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 grayscale opacity-70">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l9-18 9 18" />
              <path d="M5 21h14" />
            </svg>
            <span className="font-bold text-xl tracking-tight dark:text-white">
              Axiom<span className="font-light">Tech</span><span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex space-x-8 text-sm">
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Behance</a>
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
            <a className="hover:text-primary transition-colors" href="#">Dribbble</a>
          </div>

          <p className="text-xs">
            © 2025 Axiom Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
