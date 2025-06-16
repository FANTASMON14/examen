import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <nav className="bg-black w-full max-w-screen-xl mx-auto h-20  text-white flex items-center justify-between px-8 mt-4">
            <div className="text-3xl font-bold">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="flex gap-6 text-xl">
                <NavLink to="/Inicio" className="">
                    Inicio
                </NavLink>
                <NavLink to="/Ofertas" className="">
                    Ofertas
                </NavLink>
            </div>
        </nav>
    );
}
