import { RouteItem } from './RouteItem';

export const RouteList = ({ routes, searchTerm }) => {
    if (routes.length === 0) {
        return (
            <div className="text-center py-20 text-yellow-500/50">
                <p className="text-xl tracking-widest uppercase">No routes found</p>
            </div>
        )
    }
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6 pb-24">
            {routes.map((route) => (
                <RouteItem key={route.id} route={route} searchTerm={searchTerm} />
            ))}
        </div>
    );
};
