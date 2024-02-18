import { Header, Logo } from "./HeaderCars.styled";
import logo from '../../../public/car-rent-icon.svg';
import Navigation from "../Navigation/Navigation";


const HeaderCars = () => {
    return(
        <Header>
            <Logo to='/'>
                <img src={logo} alt="Logo" width={48} />
                <p>Rent a car</p>
            </Logo>
        </Header>
    );
};

export default HeaderCars;