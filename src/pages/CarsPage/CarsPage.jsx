import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchCars} from '../../redux/carsSlice';
import {selectCars, selectError, selectIsLoading} from '../../redux/selector';
import Loader from '../../components/Loader';
import { CarContainer, CarItem, CarList } from "./CarsPage.styled";

const CarsPage = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);
    if(isLoading) {
        return(
            <div>
                <Loader />
            </div>
        );
    }
    if(error) {
        return <div>Error: {error}</div>;
    }

    const Arr = Array.isArray(cars) && cars.length > 0;

    return(
        <>
          <CarContainer>
            <CarList>
                {Arr && cars.map((car) => (
                    <CarItem key={car.id}>
                        <div className="img-item">
                            <img
                                src={car.img}
                                alt={`${car.model}`}
                                style={{ height: "280px" }}
                            />
                        </div>
                        <div className="item-title">
                            <h2 className="item-title-text">
                                {car.make} <span>{car.model}</span>, {car.year}
                            </h2>
                            <h2 className="item-title-text">{car.rentalPrice}</h2>
                        </div>
                    </CarItem>
                ))}
                {!Arr && <div>No cars available</div>}
            </CarList>
          </CarContainer>
        </>
    );
};

export default CarsPage;