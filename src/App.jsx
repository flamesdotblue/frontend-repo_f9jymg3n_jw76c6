import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

const INITIAL_CARDS = [
  {
    id: "base1-4",
    name: "Charizard",
    set: "Base Set",
    rarity: "Holo Rare",
    category: "Base Set",
    price: 389.99,
    image: "https://images.pokemontcg.io/base1/4.png",
  },
  {
    id: "base1-2",
    name: "Blastoise",
    set: "Base Set",
    rarity: "Holo Rare",
    category: "Base Set",
    price: 249.99,
    image: "https://images.pokemontcg.io/base1/2.png",
  },
  {
    id: "jungle-11",
    name: "Snorlax",
    set: "Jungle",
    rarity: "Holo Rare",
    category: "Jungle",
    price: 119.0,
    image: "https://images.unsplash.com/photo-1734215378020-653720fc94a3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbm9ybGF4fGVufDB8MHx8fDE3NjE4MzU3Mzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    id: "fossil-2",
    name: "Articuno",
    set: "Fossil",
    rarity: "Holo Rare",
    category: "Fossil",
    price: 135.5,
    image: "https://images.pokemontcg.io/fossil/2.png",
  },
  {
    id: "neo4-1",
    name: "Celebi",
    set: "Neo Revelation",
    rarity: "Holo Rare",
    category: "Neo",
    price: 98.0,
    image: "https://images.pokemontcg.io/neo4/1.png",
  },
  {
    id: "swsh1-74",
    name: "Lapras V",
    set: "Sword & Shield",
    rarity: "Ultra Rare",
    category: "Modern",
    price: 12.75,
    image: "https://images.pokemontcg.io/swsh1/49.png",
  },
  {
    id: "cel25-4",
    name: "Pikachu (25th)",
    set: "Celebrations",
    rarity: "Classic Collection",
    category: "Modern",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1678736424903-a80e2c7f9d31?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaWthY2h1JTIwJTI4MjV0aCUyOXxlbnwwfDB8fHwxNzYxODM1NzM5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    id: "promo-7",
    name: "Ancient Mew",
    set: "Promo",
    rarity: "Holo",
    category: "Promo",
    price: 45.0,
    image: "https://images.pokemontcg.io/basep/9.png",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = useMemo(() => {
    const s = new Set(INITIAL_CARDS.map((c) => c.category));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INITIAL_CARDS.filter((c) => {
      const matchesQuery =
        q.length === 0 ||
        c.name.toLowerCase().includes(q) ||
        c.set.toLowerCase().includes(q) ||
        c.rarity.toLowerCase().includes(q);

      const matchesCategory = !selectedCategory || c.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onSellClick={() => alert("Listing flow coming soon!")} />
      <Hero query={query} onQueryChange={setQuery} />

      <div className="py-5">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <CardGrid cards={filtered} />

      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 p-6 bg-gradient-to-br from-slate-50 to-white">
          <h2 className="text-xl font-semibold mb-2">Transparent pricing</h2>
          <p className="text-gray-600">
            Prices are shown based on recent sales and market trends so you always know the fair value.
          </p>
        </div>
      </section>

      <section id="trade" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="rounded-2xl border border-black/5 p-6 bg-gradient-to-br from-emerald-50 to-white">
          <h2 className="text-xl font-semibold mb-2">Trade safely</h2>
          <p className="text-gray-600">
            Use our escrow-guided trade flow and community ratings to exchange cards with confidence.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
