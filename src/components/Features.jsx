"use client"; // required for client-side animations

import React from "react";
import {
  BarChart3,
  CreditCard,
  Package,
  Store,
  Users,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Tailwind colors
const primaryColor = "blue-600";
const iconColor = "text-blue-600";
const bgLight = "bg-gray-50";

// Individual Feature Card Component
const FeatureCard = ({ icon, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, x: isEven ? -80 : 80 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -12, scale: 1.04 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-blue-600 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition duration-700" />

      <div className="relative bg-blue-50 rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-500">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.3 }}
            transition={{ duration: 0.6 }}
            className={iconColor}
          >
            {icon}
          </motion.div>
        </motion.div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Main Feature Section
export default function FeaturesSection() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intuitive Interface",
      description:
        "Easy-to-use interface designed for speed and efficiency with minimal training.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Instant insights into sales, customers, and inventory.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Real-time stock tracking with low-stock alerts.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Seamless Payments",
      description: "Accept all payment types quickly and securely.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Loyalty",
      description: "Built-in loyalty programs to grow repeat business.",
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Multi-Location Support",
      description: "Manage multiple stores from one dashboard.",
    },
  ];

  return (
    <section
      className={`relative py-16 ${bgLight} min-h-[75vh] overflow-hidden flex items-center`}
    >
      {/* Floating background circles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-5"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Powerful features to manage and grow your business effortlessly.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
