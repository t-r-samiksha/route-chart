import { Search } from 'lucide-react';

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="bg-black/90 border-b border-yellow-500/10 p-6 sticky top-[80px] z-40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto relative group">
                <input
                    type="text"
                    placeholder="SEARCH ROUTES OR STOPS..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-900/50 text-yellow-100 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-yellow-500/50 border border-yellow-500/20 placeholder-yellow-500/30 font-medium tracking-wide transition-all duration-300 group-hover:border-yellow-500/40"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500/50 w-6 h-6 group-hover:text-yellow-500 transition-colors duration-300" />
            </div>
        </div>
    );
};
