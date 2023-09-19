import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <div className="">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default Layout;