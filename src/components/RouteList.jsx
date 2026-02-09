import { RouteItem } from './RouteItem';

export const RouteList = ({ routes, searchTerm }) => {
    if (routes.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p>No routes found.</p>
            </div>
        )
    }
    return (
        <div className="max-w-7xl mx-auto p-4 space-y-4 pb-20">
            {routes.map((route) => (
                <RouteItem key={route.id} route={route} searchTerm={searchTerm} />
            ))}
        </div>
    );
};
