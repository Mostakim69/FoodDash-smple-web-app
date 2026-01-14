export default function Promo() {
  return (
    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-3xl text-white">
        <h3 className="text-3xl font-bold">Refer & Earn</h3>
        <p className="mt-2">Get $10 for every friend</p>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-3xl text-white">
        <h3 className="text-3xl font-bold">Loyalty Rewards</h3>
        <p className="mt-2">Earn points on every order</p>
      </div>
    </section>
  );
}
