"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Categories() {
  // ✅ Dummy Categories
  const categories = [
    { name: "Burger", emoji: "🍔", slug: "burger" },
    { name: "Taco", emoji: "🌮", slug: "taco" },
    { name: "Burrito", emoji: "🌯", slug: "burrito" },
    { name: "Drink", emoji: "🥤", slug: "drink" },
    { name: "Ice Cream", emoji: "🍦", slug: "ice-cream" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.08,
      y: -6,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Featured Categories
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose your favorite food category and explore delicious items.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="group"
            >
              <Link href={`/products?category=${category.slug}`}>
                <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 cursor-pointer">
                  {/* Emoji Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {category.emoji}
                  </motion.div>

                  {/* Category Name */}
                  <p className="text-lg font-semibold text-gray-800 tracking-wide">
                    {category.name}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
