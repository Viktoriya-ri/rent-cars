import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addCar, deleteCar } from "../../redux/favorites/favoriteSlice";
import {selectAllFavoriteCars} from "../../redux/favorites/selectors";

import css from "./CarsCard.module.css";


const CarCard = ({data}) => {
    const {
        id,
        make,
        model,
        year,
        address,
        accessories,
        rentalCompany,
        rentalPrice,
        img,
        type,
        mileage,
      } = data;

      const city = address?.split(',')[1];
      const country = address?.split(',')[2];

      const dispatch = useDispatch();
      const [isFavorite, setFavorite] = useState(false);
    //   const [isShowModal, setIsShowModal] = useState(false);
      const favoritesCars = useSelector(selectAllFavoriteCars);

      useEffect(() => {
        if(favoritesCars.find((car) => car.id === id)){
            setFavorite(true);
        }else {
            setFavorite(false);
        }
      }, [favoritesCars, dispatch, id]);

      const handleLearnMoreClick = () => {
        if(favoritesCars.find((car) => car.id === id)){
            dispatch(deleteCar(data.id));
        }else{
            dispatch(addCar(data));
        }
      };

    //   const handleMore = () => {
    //     setIsShowModal(true);
    //   };
    
      return(
        <div className={css.wrapper}>
            <div className="">
                <img className={css.image} src={img} alt={model} width="274" />
                <div className={css.titleWrapper}>
                    <h3 className={css.title}>
                        {`${make}`}
                        <span className={css.model}>{model}</span>
                        {`, ${year}`}
                    </h3>
                    <span className={css.price}>${rentalPrice}</span>
                </div>
                <div>
                    <div className={css.optionsWrapper}>
                        <span className={css.option}>{city}</span>
                        <span className={css.option}>{country}</span>
                        <span className={css.option}>{rentalCompany}</span>
                        <span className={css.option}>Premium</span>
                    </div>
                    <div className={css.optionsWrapper}>
                        <span className={css.option}>{type}</span>
                        <span className={css.option}>{make}</span>
                        <span className={css.option}>{mileage}</span>
                        <span className={css.option}>{accessories[0]}</span>
                    </div>
                </div>
                {/* <button className={css.btn} onClick={handleMore}>
                    Learn more
                </button> */}
            </div>
            <button 
               className={isFavorite ? css.btnFavActive : css.btnFav} 
             onClick={(id) => handleLearnMoreClick(id)}></button>
        </div>
      );
      
};

export default CarCard;