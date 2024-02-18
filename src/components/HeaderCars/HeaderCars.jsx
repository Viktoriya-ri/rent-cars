import { Header, Logo } from "./HeaderCars.styled";
import logo from '../../imglogo/car-rent-icon.svg';
import Navigation from "../Navigation/Navigation";


const HeaderCars = () => {
    return(
        <Header>
            <Logo to='/'>
                <img src={logo} alt="Logo" width={48} />
                <p>Rent a car</p>
            </Logo>
            <Navigation />
        </Header>
    );
};

export default HeaderCars;