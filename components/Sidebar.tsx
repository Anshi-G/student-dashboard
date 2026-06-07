export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 min-h-screen border-r border-zinc-800 p-6">
      <h2 className="text-2xl font-bold">LearnX</h2>

      <nav className="mt-10 space-y-3">
        <div className="rounded-xl bg-white/10 px-4 py-3 cursor-pointer">
          🏠 Home
        </div>

        <div className="rounded-xl px-4 py-3 hover:bg-white/5 cursor-pointer transition">
          📚 Courses
        </div>

        <div className="rounded-xl px-4 py-3 hover:bg-white/5 cursor-pointer transition">
          📈 Activity
        </div>

        <div className="rounded-xl px-4 py-3 hover:bg-white/5 cursor-pointer transition">
          ⚙ Settings
        </div>
      </nav>
    </aside>
  );
}
