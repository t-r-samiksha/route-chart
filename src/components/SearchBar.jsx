import { Search } from 'lucide-react';

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="bg-gray-900 border-b border-gray-800 p-4 sticky top-[64px] z-40">
            <div className="max-w-7xl mx-auto relative">
                <input
                    type="text"
                    placeholder="Search routes or stops..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 text-gray-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 border border-gray-700 placeholder-gray-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
        </div>
    );
};
