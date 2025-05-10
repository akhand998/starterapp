import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <NavLink to="/">
                    <div>
                        
                        <img src="/online-shop(1).png" alt="Online Shopping" width={80} height={90}/>

                    </div>
                </NavLink>
                <div className="flex flex-row gap-4">
                    <NavLink to="/" className="text-2xl font-bold text-gray-700 hover:text-gray-900">
                        Home
                    </NavLink>
                    <NavLink to="/cart" className="text-2xl font-bold text-gray-700 hover:text-gray-900">
                        <div>
                            <img src="/shopping-cart.png" alt="Shopping Cart" width={40} height={40}/>
                        </div>
                 
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default Navbar;