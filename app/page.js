import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to <span className="text-blue-600">Athlete Focus</span> 🏃🏾‍♀️
      </h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Track your performance and recovery in one place.
      </p>

      <Link href="/log">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Log Workout
        </button>
      </Link>
    </main>
  );
}

