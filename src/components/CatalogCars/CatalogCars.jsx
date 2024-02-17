import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchCars } from "../../redux/carsSlice";
import { selectCars, selectError, selectIsLoading } from "../../redux/selector";
import { Container, Header, List, Item } from './CatalogCars.styled';


const CatalogCars = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);
    if(isLoading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error...</div>;
    }

    const Arr = Array.isArray(cars) && cars.length > 0;
    return (
        <Container>
            <Header>Car Catalog</Header>
            <List>
                {Arr && cars.map(car => (
                    <Item key={car.id}>
                        <h3>{car.make} {car.model}</h3>
                        <p>Year: {car.year}</p>
                    </Item>
                ))}
                {!Arr && (
                    <div>No cars available</div>
                )}
            </List>
        </Container>
    );
}

export default CatalogCars;