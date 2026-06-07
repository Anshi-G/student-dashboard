import { getCourses } from "../lib/getCourses";
// import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="flex-1 p-6">
          {/* Hero Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30 blur-2xl" />

            <div className="flex items-center justify-between">
              <div>
                <div className="relative z-10">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                    🚀 Learning Dashboard
                  </span>

                  <h1 className="mt-4 text-5xl font-bold">
                    Welcome Back,
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {" "}
                      Anshima
                    </span>
                    👋
                  </h1>

                  <p className="mt-4 text-zinc-400">
                    Continue your journey and maintain your learning streak.
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex gap-8">
                  <div>
                    <p className="text-3xl font-bold">15</p>
                    <p className="text-zinc-400">Day Streak</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold">{courses.length}</p>
                    <p className="text-zinc-400">Active Courses</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold">82%</p>
                    <p className="text-zinc-400">Completion</p>
                  </div>
                </div>
              </div>

              {/* <div className="hidden md:flex items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-80 blur-sm"></div>
              </div> */}

              <div className="hidden md:block rounded-2xl border border-white/10 bg-white/5 p-5 min-w-[220px]">
                <p className="text-sm text-zinc-400">Daily Learning Goal</p>

                <h3 className="mt-2 text-3xl font-bold">60%</h3>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>

                <p className="mt-3 text-sm text-zinc-400">
                  3 / 5 Tasks Completed
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            {/* Activity Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Weekly Activity</h3>

                  <p className="mt-1 text-sm text-zinc-400">Last 7 Days</p>
                </div>

                <div className="text-cyan-400">18h</div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-2">
                <div className="h-6 w-6 rounded bg-cyan-500"></div>
                <div className="h-6 w-6 rounded bg-purple-500"></div>
                <div className="h-6 w-6 rounded bg-zinc-700"></div>
                <div className="h-6 w-6 rounded bg-cyan-500"></div>
                <div className="h-6 w-6 rounded bg-purple-500"></div>
                <div className="h-6 w-6 rounded bg-cyan-500"></div>
                <div className="h-6 w-6 rounded bg-zinc-700"></div>

                <div className="h-6 w-6 rounded bg-purple-500"></div>
                <div className="h-6 w-6 rounded bg-cyan-500"></div>
                <div className="h-6 w-6 rounded bg-purple-500"></div>
                <div className="h-6 w-6 rounded bg-zinc-700"></div>
                <div className="h-6 w-6 rounded bg-cyan-500"></div>
                <div className="h-6 w-6 rounded bg-purple-500"></div>
                <div className="h-6 w-6 rounded bg-cyan-500"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
