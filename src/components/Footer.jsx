export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PokéMarket. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-900" href="#">Privacy</a>
          <a className="hover:text-gray-900" href="#">Terms</a>
          <a className="hover:text-gray-900" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
