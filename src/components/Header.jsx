import citLogo from '../assets/cit_logo.webp';
import hackerzLogo from '../assets/trojan_logo.png';

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-yellow-400 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

                {/* Left: CIT Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={citLogo}
                        alt="Chennai Institute of Technology"
                        className="h-16 md:h-20 object-contain"
                    />
                </div>

                {/* Center: Title */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-black font-extrabold text-3xl md:text-5xl tracking-wide uppercase leading-none">
                        BUS ROUTE
                    </h1>
                    <p className="text-black font-medium text-xs md:text-sm tracking-wide">
                        Management System
                    </p>
                </div>

                {/* Right: Hackerz Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={hackerzLogo}
                        alt="Hackerz"
                        className="h-14 md:h-16 object-contain"
                    />
                </div>

            </div>
        </header>
    );
};
