export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 border-l-4 border-cyan-500 pl-4">
            About Game
          </h2>
          <p className="text-slate-400 leading-relaxed">
            สวมบทบาทแฮกเกอร์ในโลกไซเบอร์พังก์ เรียนรู้การทำงานของระบบเน็ตเวิร์ก
            ผ่านเกมเพลย์แนววางแผนที่ต้องใช้ทักษะการแก้ปัญหาอย่างแท้จริง
          </p>
        </div>
        <div className="bg-slate-700 h-64 rounded-xl border border-slate-600 flex items-center justify-center">
          <span className="text-slate-500 italic">[ Game Screenshot ]</span>
        </div>
      </div>
    </section>
  );
}
