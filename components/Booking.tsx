
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(2);
  const days = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <section id="booking" className="py-24 bg-white dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#101622] rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20"></div>
          
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white relative z-10">
              <h2 className="text-4xl font-bold mb-8">Pronto para transformar seu produto?</h2>
              <p className="text-slate-400 text-lg mb-12">
                Escolha um horário. Nesta chamada de 30 minutos, mergulharemos nos seus desafios atuais e traçaremos um caminho para alta conversão.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="material-icons text-primary">schedule</span>
                  </div>
                  <div>
                    <p className="font-bold">30-Minute Intro</p>
                    <p className="text-sm text-slate-500">Free Strategy Assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="material-icons text-primary">videocam</span>
                  </div>
                  <div>
                    <p className="font-bold">Google Meet / Zoom</p>
                    <p className="text-sm text-slate-500">Link enviado após agendamento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-8 bg-slate-800/50">
              <div className="w-full h-full bg-white rounded-2xl p-8 flex flex-col">
                <div className="flex justify-between items-center mb-8 border-b pb-4 border-slate-100">
                  <span className="font-bold text-slate-900 uppercase tracking-widest text-xs">Novembro 2024</span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center">
                      <span className="material-icons text-sm">chevron_left</span>
                    </button>
                    <button className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center">
                      <span className="material-icons text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-8 text-center text-[10px] font-bold text-slate-400 uppercase">
                  <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-8">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`h-10 flex items-center justify-center rounded-lg font-bold transition-all ${
                        selectedDay === day 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                        : 'bg-slate-50 text-slate-900 hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                  {Array.from({ length: 17 }, (_, i) => 15 + i).map((day) => (
                    <div key={day} className="h-10 flex items-center justify-center text-slate-300 font-medium">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <p className="text-xs text-slate-500 mb-4 text-center italic">
                    Selecionado: Quinta-feira, {selectedDay} de Nov - 14:00 BRT
                  </p>
                  <button className="w-full bg-primary py-4 rounded-xl text-white font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform">
                    Confirmar Agendamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
