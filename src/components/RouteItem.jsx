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
        <div className={`rounded-xl overflow-hidden transition-all duration-300 border backdrop-blur-md ${isOpen
            ? 'border-yellow-500/50 bg-black/80 shadow-[0_0_25px_rgba(234,179,8,0.15)] ring-1 ring-yellow-500/20'
            : 'border-yellow-500/10 bg-black/40 hover:bg-black/60 hover:border-yellow-500/30'
            }`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex items-center justify-between text-left group transition-all duration-300"
            >
                <div className="flex items-center space-x-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 shadow-lg ${isOpen
                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black shadow-yellow-500/30 scale-110'
                        : 'bg-black/50 text-yellow-500 border border-yellow-500/20 group-hover:border-yellow-500/50 group-hover:text-yellow-400'
                        }`}>
                        {route.routeNo}
                    </div>
                    <div>
                        <h3 className={`text-xl font-bold tracking-wider uppercase transition-colors duration-300 ${isOpen ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]' : 'text-gray-200 group-hover:text-yellow-200'
                            }`}>
                            {route.destination}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors">
                            <Bus className={`w-4 h-4 mr-2 transition-colors ${isOpen ? 'text-yellow-500' : 'text-gray-600 group-hover:text-yellow-500/50'}`} />
                            <span className="tracking-wide">Route No. {route.routeNo}</span>
                        </div>
                    </div>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-yellow-500/50 transition-colors" />
                )}
            </button>

            {isOpen && (
                <div className="border-t border-yellow-500/10 bg-black/40 p-6 backdrop-blur-sm">
                    <div className="flex items-center mb-6 text-yellow-500/80 text-sm font-bold tracking-[0.2em] uppercase">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Stops ({route.stops.length})</span>
                    </div>

                    <div className="relative pl-2 space-y-6">
                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-yellow-500/20"></div>

                        {route.stops.map((stop, index) => (
                            <div key={index} className="relative flex items-start group">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-3px] mt-1.5 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black z-10 group-hover:bg-yellow-500 group-hover:shadow-[0_0_8px_rgba(234,179,8,0.6)] transition-all duration-300"></div>

                                {/* Content */}
                                <div className="ml-10">
                                    <h4 className="text-gray-200 font-medium tracking-wide group-hover:text-yellow-400 transition-colors duration-300 text-sm md:text-base">
                                        {stop.name}
                                    </h4>
                                    <div className="flex items-center text-gray-300 text-sm md:text-base mt-1 font-semibold tracking-wide 
group-hover:text-yellow-400 transition-colors duration-300">

                                        <Clock className="w-3 h-3 mr-1.5" />
                                        {stop.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};