import { RefreshCcw, Tag } from "lucide-react";

function CardItem({ card }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white/80 backdrop-blur shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="p-4 flex items-start gap-4">
        <div className="shrink-0 w-28 h-36 bg-white rounded-xl border border-black/5 overflow-hidden">
          <img src={card.image} alt={card.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 leading-tight">{card.name}</h3>
              <p className="text-sm text-gray-500">{card.set} • {card.rarity}</p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                <Tag className="h-4 w-4" />
                <span className="font-semibold">${card.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800">
              Buy Now
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 inline-flex items-center gap-2">
              <RefreshCcw className="h-4 w-4" />
              Trade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardGrid({ cards }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />)
        )}
      </div>
      {cards.length === 0 && (
        <div className="text-center py-16 text-gray-500">No cards match your filters yet.</div>
      )}
    </section>
  );
}
