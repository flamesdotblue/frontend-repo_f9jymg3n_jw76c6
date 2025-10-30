export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div id="browse" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat === 'All' ? null : cat)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors ${
              selected === cat || (cat === 'All' && selected === null)
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
