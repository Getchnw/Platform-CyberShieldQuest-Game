"use client";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Game", href: "#game" },
    // { name: "How to Play", href: "#controls" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-cyan-400 font-black text-2xl tracking-tighter">
          CyberShieldQuest
        </div>
        {/* Menu */}
        <div className=""></div>
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm uppercase tracking-widest"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
