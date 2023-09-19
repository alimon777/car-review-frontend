import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col ">
            <nav className="flex flex-row bg-gray-800">
                <div className="p-5">
                    <NavLink to="/" className="text-2xl font-Ferretface text-white  hover:text-orange-500">Ride Radar</NavLink>
                </div>
                <div className="flex-grow flex flex-row items-center p-3">
                    <span className="ml-2 text-gray-500 flex-none">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path
                                fillRule="evenodd"
                                d="M8.5 15a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm5.057-1.54l4.442 4.442a1 1 0 11-1.414 1.414l-4.442-4.442a7 7 0 111.414-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        // onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 mx-2 my-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-login text-gray-600"
                    />
                </div>
                <div className="p-5 text-white font-Outfit-Regular">
                    <NavLink to="/login" className="hover:text-orange-500">Login/Register</NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default Layout;