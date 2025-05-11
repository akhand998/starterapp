import { NavLink } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <NavLink to="/" className="logo">
                    <img src="/online-shop(1).png" alt="Online Shopping" width={80} height={90} />
                </NavLink>
                <div className="navbar-links">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/cart" className="nav-link">
                        <img src="/shopping-cart.png" alt="Shopping Cart" width={40} height={40} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;