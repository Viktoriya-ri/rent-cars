import { NavLink } from "react-router-dom";
import { WrapNavigation } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <WrapNavigation>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </WrapNavigation>
    );
};

export default Navigation;

