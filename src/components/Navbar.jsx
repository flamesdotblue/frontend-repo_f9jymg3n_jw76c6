import { ShoppingCart, Star } from "lucide-react";

export default function Navbar({ onSellClick }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center shadow-md">
            <Star className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">PokéMarket</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900 transition-colors" href="#browse">Browse</a>
          <a className="hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-gray-900 transition-colors" href="#trade">Trade</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onSellClick}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white text-sm shadow hover:bg-gray-800"
          >
            Sell a Card
          </button>
          <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 hover:bg-gray-50">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
