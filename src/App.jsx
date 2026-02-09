import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { RouteList } from './components/RouteList';
import { routes } from './data/routes';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = useMemo(() => {
    if (!searchTerm) return routes;
    const lowerTerm = searchTerm.toLowerCase();
    return routes.filter(
      (route) =>
        route.routeNo.toLowerCase().includes(lowerTerm) ||
        route.destination.toLowerCase().includes(lowerTerm) ||
        route.stops.some((stop) => stop.name.toLowerCase().includes(lowerTerm))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RouteList routes={filteredRoutes} searchTerm={searchTerm} />
      </main>

      {/* Footer / Copyright */}
      <footer className="text-center p-6 text-gray-600 text-sm border-t border-gray-900 mt-auto">
        <p>&copy; {new Date().getFullYear()} Bus Route Management System</p>
      </footer>
    </div>
  );
}

export default App;
