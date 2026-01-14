"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-primary">FoodDash</h1>

        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          🌙
        </button>
      </div>
    </nav>
  );
}
