import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { resetCars, addPage } from "../../redux/cars/carsSlice";

import css from './CatalogCars.module.css';
import {selectIsLoading, selectCars, selectPage} from '../../redux/cars/selector';
import CarCard from "../CarsCard/CarsCard";
import Filter from '../FilterForm/Filter';
import Loader from '../Loader';


const CatalogCars = () => {
    const [searchParams] = useSearchParams();
    const make = searchParams.get("make");
    const price = searchParams.get("price");
    const from = searchParams.get("from") ?? 1;
    const to = searchParams.get("to") ?? 999999999;

    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const isLoading = useSelector(selectIsLoading);
    const page = useSelector(selectPage);
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        return() => {
            dispatch(resetCars());
        };
        
    }, [dispatch]);
    
    useEffect(() => {
        let tempCars = [...cars];

        if(price) tempCars = tempCars.filter((car) => car.rentalPrice <= price);

        if(from && to)
        tempCars = tempCars.filter(
    (car) => car.mileage >= from && car.mileage <= to);

    setFilteredCars(tempCars);
    }, [cars, price, from, to]);

    const handleLoadMore = () => {
        dispatch(addPage());
    };

    return (
        <>
        <div className={css.container}>
            <Filter />
            <section className={css.sectionCatalog}>
                {filteredCars &&
                filteredCars.map((car) => {
                    return <CarCard key={car.id} data={car}/>;
                })}
            </section>
            {page < 3 && !make && (
                <button className={css.btn} type="button" onClick={handleLoadMore}>
                    Load more
                </button>
            )}
        </div>
        {isLoading && <Loader />}
        </>
       
    );
  
};

export default CatalogCars;

