import "./Header.css";
import { NavLink } from "react-router";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <NavLink to="/">Main Page</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </nav>
        </header>
    )
}

export default Header;