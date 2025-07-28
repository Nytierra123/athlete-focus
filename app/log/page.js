"use client";
import { useState } from "react";
import Link from "next/link";

export default function LogWorkout() {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkout = { workoutType, duration, date };
    setWorkouts([newWorkout, ...workouts]);

    setWorkoutType("");
    setDuration("");
    setDate("");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Log Your Workout 📝</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md mb-6"
      >
        <input
          type="text"
          placeholder="Workout Type (e.g., Running)"
          value={workoutType}
          onChange={(e) => setWorkoutType(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Workout
        </button>
      </form>

      
      <section className="w-full max-w-md">
        {workouts.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Workout History 📋</h2>
            <ul className="space-y-2">
              {workouts.map((workout, index) => (
                <li
                  key={index}
                  className="border p-2 rounded shadow-sm bg-gray-100"
                >
                  <strong>{workout.workoutType}</strong> - {workout.duration} min on{" "}
                  {workout.date}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      
      <Link href="/">
        <button className="mt-8 text-blue-600 underline hover:text-blue-800">
          ← Back to Home
        </button>
      </Link>
    </main>
  );
}
