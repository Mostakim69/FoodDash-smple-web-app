const categories = [
  "🍔 Burger",
  "🌮 Taco",
  "🌯 Burrito",
  "🥤 Drink",
  "🍦 Ice Cream",
];

export default function Categories() {
  return (
    <section className="mb-12">
      <h3 className="text-xl font-extrabold mb-4">Categories</h3>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {categories.map((item) => (
          <div
            key={item}
            className="min-w-[96px] h-28 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center font-bold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
