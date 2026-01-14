const foods = [
  { name: "Chicken Burger", price: "£6.00" },
  { name: "Beef Burger", price: "£10.00" },
  { name: "Healthy Bowl", price: "£8.50" },
  { name: "Pepperoni Pizza", price: "£14.00" },
];

export default function PopularDishes() {
  return (
    <section className="mb-12">
      <h3 className="text-xl font-extrabold mb-6">Popular Dishes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div
            key={food.name}
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow"
          >
            <h4 className="font-bold">{food.name}</h4>
            <p className="text-primary font-extrabold mt-2">{food.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
