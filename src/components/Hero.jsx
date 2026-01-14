"use client";

import { motion } from "framer-motion";
import { CreditCard, Package, BarChart3, TrendingUp } from "lucide-react";

export default function Hero() {
  const features = [
    {
      icon: CreditCard,
      title: "Seamless Payments",
      desc: "Accept any payment method quickly and securely.",
    },
    {
      icon: Package,
      title: "Smart Inventory",
      desc: "Track your stock in real-time with low-stock alerts.",
    },
    {
      icon: BarChart3,
      title: "Customer Insights",
      desc: "Understand sales trends with detailed analytics.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      desc: "Make data-driven decisions to grow your business.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="min-h-screen bg-gray-50 text-gray-900">
      <div className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              Powering the <br /> Future of Retail
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              We build intuitive, modern tools that help businesses operate
              efficiently, understand customers, and grow faster. Our goal is to
              bring enterprise-level features to every business.
            </motion.p>

            {/* FEATURES */}
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    custom={i + 1}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-gray-100 border border-gray-300 shadow-sm">
                      <Icon className="w-6 h-6 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTON */}
            <motion.button
              variants={fadeUp}
              whileTap={{ scale: 0.97 }}
              className="
                mt-12 px-10 py-4 font-semibold
                rounded-xl bg-blue-600 text-white
                shadow-md hover:shadow-xl
                transition-all hover:scale-[1.03]
              "
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="border border-gray-200 bg-gray-50 rounded-3xl p-8 shadow-xl overflow-hidden">
              {/* FLOAT IMAGE */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://i.postimg.cc/XqJPbyQK/363fc4b86530de499a8107989daf5b20.jpg"
                    alt="POS Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* BADGE */}
              <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-xl">
                Live
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
