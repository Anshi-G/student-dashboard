interface CourseCardProps {
  title: string;
  progress: number;
}

export default function CourseCard({ title, progress }: CourseCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-3 text-cyan-400">Progress: {progress}%</p>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
