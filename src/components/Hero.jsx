import { Search } from "lucide-react";

export default function Hero({ query, onQueryChange }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-50 to-sky-100" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Buy, sell and trade Pokémon cards with confidence
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover iconic classics and modern hits. Transparent pricing, secure trades, and a vibrant community market.
            </p>

            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => onQueryChange(e.target.value)}
                  placeholder="Search cards, sets, or Pokémon..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Try: Charizard, Base Set, Pikachu, Holo
              </p>
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/70 border border-black/5 shadow-xl overflow-hidden">
              <img
                src="https://images.pokemontcg.io/base1/4.png"
                alt="Charizard Card"
                className="w-full h-full object-contain p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
