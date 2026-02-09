import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Bus } from 'lucide-react';

export const RouteItem = ({ route, searchTerm }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (searchTerm) {
            const hasMatchingStop = route.stops.some((stop) =>
                stop.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (hasMatchingStop) {
                setIsOpen(true);
            }
        }
    }, [searchTerm, route.stops]);

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg hover:border-yellow-400/30 transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-750 transition-colors"
            >
                <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-400/20">
                        {route.routeNo}
                    </div>
                    <div className="text-left">
                        <h3 className="text-white font-bold text-lg tracking-wide uppercase flex items-center gap-2">
                            {route.destination}
                        </h3>
                        <p className="text-gray-400 text-xs flex items-center gap-1">
                            <Bus className="w-3 h-3" /> Route No. {route.routeNo}
                        </p>
                    </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-yellow-400 w-6 h-6" />
                </div>
            </button>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-4 bg-gray-900/50 border-t border-gray-700">
                    <div className="flex items-center gap-2 mb-4 text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                        <MapPin className="w-4 h-4" /> Stops ({route.stops.length})
                    </div>
                    <div className="space-y-3 relative before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-700">
                        {route.stops.map((stop, index) => (
                            <div key={index} className="flex items-start gap-4 relative pl-6">
                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-yellow-400 bg-gray-900 z-10"></div>
                                <div className="flex-1 pb-2 border-b border-gray-800/50 last:border-0">
                                    <div className="text-gray-200 font-medium">{stop.name}</div>
                                    {stop.time && (
                                        <div className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                                            <Clock className="w-3 h-3" /> {stop.time}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
