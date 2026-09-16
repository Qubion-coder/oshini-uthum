import React from 'react';

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden bg-[#F0EEE9]" style={{ opacity: 1 }}>
      
      <div className="relative z-10 flex items-center justify-center w-full max-w-[420px] p-4">
        <div className="relative z-10 w-full aspect-[2/3.3] max-h-[88vh] rounded-t-[999px] rounded-b-[999px] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_#fff_0%,_#FDFBF7_100%)] shadow-[0_40px_100px_rgba(0,0,0,0.15),_inset_0_0_60px_rgba(196,160,82,0.05)] border-[3px] border-[#B69559]/60 text-center px-10 overflow-hidden">
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          <div className="absolute inset-[10px] rounded-t-[999px] rounded-b-[999px] border border-[#B69559]/30 pointer-events-none"></div>
          <div className="absolute inset-[18px] rounded-t-[999px] rounded-b-[999px] border border-dotted border-[#B69559]/20 pointer-events-none"></div>
          
          <div className="absolute top-10 left-10 w-4 h-4 flex items-center justify-center opacity-60">
            <div className="absolute w-full h-[1px] bg-[#B69559] rotate-45"></div>
            <div className="absolute w-full h-[1px] bg-[#B69559] -rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-[#B69559] rotate-45 shadow-[0_0_5px_#B69559]"></div>
          </div>
          
          <div className="absolute top-10 right-10 w-4 h-4 flex items-center justify-center opacity-60">
            <div className="absolute w-full h-[1px] bg-[#B69559] rotate-45"></div>
            <div className="absolute w-full h-[1px] bg-[#B69559] -rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-[#B69559] rotate-45 shadow-[0_0_5px_#B69559]"></div>
          </div>
          
          <div className="absolute bottom-10 left-10 w-4 h-4 flex items-center justify-center opacity-60">
            <div className="absolute w-full h-[1px] bg-[#B69559] rotate-45"></div>
            <div className="absolute w-full h-[1px] bg-[#B69559] -rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-[#B69559] rotate-45 shadow-[0_0_5px_#B69559]"></div>
          </div>
          
          <div className="absolute bottom-10 right-10 w-4 h-4 flex items-center justify-center opacity-60">
            <div className="absolute w-full h-[1px] bg-[#B69559] rotate-45"></div>
            <div className="absolute w-full h-[1px] bg-[#B69559] -rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-[#B69559] rotate-45 shadow-[0_0_5px_#B69559]"></div>
          </div>
          
          <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
            <div className="w-[1px] h-8 bg-gradient-to-t from-[#B69559] to-transparent"></div>
            <div className="w-2 h-2 rounded-full border border-[#B69559]"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center w-full py-12 relative z-10">
            <div className="text-2xl text-[#8A703C] mb-8 tracking-widest font-display">The Wedding Of</div>
            <h1 className="text-5xl md:text-6xl text-gray-900 leading-[1.1] mb-12" style={{ fontFamily: "'Lavishly Yours', cursive" }}>
              <span className="block text-[#4A4439] drop-shadow-sm">Oshini</span>
              <div className="flex items-center justify-center gap-4 my-4">
                <div className="w-12 h-[1px] bg-[#B69559]/40"></div>
                <span className="text-2xl text-[#B69559] italic">&amp;</span>
                <div className="w-12 h-[1px] bg-[#B69559]/40"></div>
              </div>
              <span className="block text-[#4A4439] drop-shadow-sm">Uthum</span>
            </h1>
            <div className="relative mt-4">
              <div className="absolute -inset-4 bg-[#B69559]/5 rounded-full blur-xl"></div>
              <button 
                onClick={onEnter} 
                className="font-sans px-12 py-4 border border-[#B69559] text-[#8A703C] rounded-full hover:bg-[#B69559] hover:text-white transition-all duration-700 uppercase tracking-[0.4em] text-[11px] relative z-30 bg-white/50 backdrop-blur-sm shadow-sm font-semibold"
              >
                View Invitation
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
            <div className="w-2 h-2 rounded-full border border-[#B69559]"></div>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#B69559] to-transparent"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
