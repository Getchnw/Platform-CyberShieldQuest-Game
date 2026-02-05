import Navbar from "./components/Navbar";
import About from "./components/About";
import GameArea from "./components/GameArea";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar /> {/* ใส่ Navbar ตรงนี้ */}
      <Hero />
      <About />
      <GameArea />
      {/* <Controls /> */}
      <footer className="py-10 text-center text-slate-600 border-t border-slate-800">
        © 2026 Cyber Ops Project.
      </footer>
    </main>
  );
}
