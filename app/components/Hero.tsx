"use client";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-4 italic text-cyan-400">
          CYBER OPS
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-300">
          ทะลวงระบบความปลอดภัยแห่งอนาคต
        </p>
        <a
          href="#game"
          className="bg-cyan-500 hover:bg-cyan-400 
        text-black font-bold py-4 px-10 rounded-full 
        transition-all duration-300 ease-in-out transform
        hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]
        "
        >
          PLAY NOW
        </a>
      </div>
    </section>
  );
}
