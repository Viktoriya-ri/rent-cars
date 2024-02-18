import { NavLink } from "react-router-dom";
import { WrapNavigation, WrapUl } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <WrapNavigation>
            <WrapUl>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/catalog">Catalog</NavLink>
                </li>
                <li>
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </WrapUl>
   
        </WrapNavigation>
    );
};

export default Navigation;

