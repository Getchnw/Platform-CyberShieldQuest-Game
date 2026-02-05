"use client";
import { useState, useEffect } from "react";

export default function GameArea() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const mobile =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        navigator.userAgent.toLowerCase(),
      );
    setIsMobile(mobile);
  }, []);

  if (isMobile === null) return null;

  return (
    <section id="game" className="py-20 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10 text-cyan-400 uppercase tracking-widest">
          Operation Area
        </h2>
        <div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          {isMobile ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900">
              <span className="text-6xl mb-4">💻</span>
              <h3 className="text-2xl font-bold mb-2">Desktop Only</h3>
              <p className="text-slate-400 text-sm">
                เกมนี้ไม่รองรับการเล่นผ่านมือถือ โปรดใช้คอมพิวเตอร์เพื่อเข้าเล่น
              </p>
            </div>
          ) : (
            <>
              {!gameStarted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 z-10">
                  <button
                    onClick={() => setGameStarted(true)}
                    className="bg-cyan-500 p-6 rounded-full text-black hover:scale-110 transition-transform"
                  >
                    <svg className="w-12 h-12 fill-current" viewBox="0 0 20 20">
                      <path d="M4 4l12 6-12 6V4z" />
                    </svg>
                  </button>
                  <p className="mt-6 text-cyan-400 font-mono animate-pulse">
                    READY TO DEPLOY?
                  </p>
                </div>
              ) : (
                <iframe
                  src="https://framer-motion-web-5rkn.vercel.app/"
                  className="w-full h-full border-none"
                  allow="fullscreen; autoplay; pointer-lock"
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
