import citLogo from '../assets/cit_logo.webp';
import hackerzLogo from '../assets/trojan_logo.png';

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 shadow-lg shadow-yellow-500/10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Left: CIT Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={citLogo}
                        alt="Chennai Institute of Technology"
                        className="h-12 md:h-16 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
                    />
                </div>

                {/* Center: Title */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 font-extrabold text-3xl md:text-5xl tracking-widest uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter">
                        TROJANS
                    </h1>
                    <p className="text-yellow-100/80 font-medium text-xs md:text-sm tracking-[0.3em] mt-1">
                        BUS ROUTE MANAGEMENT
                    </p>
                </div>

                {/* Right: Hackerz Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={hackerzLogo}
                        alt="Hackerz"
                        className="h-12 md:h-16 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
                    />
                </div>

            </div>
        </header>
    );
};
