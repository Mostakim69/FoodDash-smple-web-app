"use client";

import { ChevronLeft, ChevronRight, Heart, Plus } from "lucide-react";

export default function PopularDishes() {
  const dishes = [
    {
      id: 1,
      name: "Chicken Burger",
      image: "https://images.unsplash.com/photo-1606755962773-0c8c3f7c1b2b",
      price: 6.0,
      oldPrice: 10.0,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Beef Burger",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      price: 10.0,
      oldPrice: 12.0,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Healthy Bowl",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      price: 8.5,
      oldPrice: 11.0,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      image: "https://images.unsplash.com/photo-1601924582975-7e670c2f7b29",
      price: 14.0,
      oldPrice: 18.0,
      rating: 4.7,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Popular Dishes</h2>

          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-44 object-cover"
                />

                {/* Favorite */}
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart size={18} className="text-red-500" />
                </button>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-lg text-sm font-semibold shadow">
                  ⭐ {dish.rating}
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">{dish.name}</h3>

                <div className="flex items-center justify-between mt-3">
                  {/* Price */}
                  <div>
                    <span className="text-red-500 font-bold">
                      €{dish.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400 line-through text-sm ml-2">
                      €{dish.oldPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Add Button */}
                  <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
