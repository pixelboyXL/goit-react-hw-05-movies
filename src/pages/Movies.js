import { Outlet } from "react-router-dom";

export const Movies = () => {
    return (
        <main>
            <div>Movies</div>
            <Outlet />
        </main>
    );
};