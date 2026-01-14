export default function Promo() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16 px-4 sm:px-6 lg:px-8">
        {/* Refer & Earn Card */}
        <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 p-10 rounded-3xl text-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
          <h3 className="text-4xl font-extrabold mb-4">Refer & Earn</h3>
          <p className="text-lg mb-6">
            Get <span className="font-bold">$10</span> for every friend you
            invite
          </p>
          <button className="bg-white text-indigo-600 cursor-pointer font-semibold px-6 py-2 rounded-full shadow-md hover:bg-indigo-50 transition">
            Invite Friends
          </button>
          {/* Decorative circle */}
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white opacity-10 rounded-full"></div>
        </div>

        {/* Loyalty Rewards Card */}
        <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 p-10 rounded-3xl text-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
          <h3 className="text-4xl cursor-pointer font-extrabold mb-4">Loyalty Rewards</h3>
          <p className="text-lg mb-6">
            Earn points on every order and redeem amazing rewards
          </p>
          <button className="bg-white text-emerald-600 font-semibold px-6 py-2 cursor-pointer rounded-full shadow-md hover:bg-emerald-50 transition">
            Learn More
          </button>
          {/* Decorative circle */}
          <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-white opacity-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
