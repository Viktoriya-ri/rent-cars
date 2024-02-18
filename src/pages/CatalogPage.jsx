import { useEffect } from "react";
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import { selectError } from "../redux/cars/selector";
import CatalogCars from "../components/CatalogCars/CatalogCars";


const CatalogPage = () => {
    const error = useSelector(selectError);

    useEffect(() => {
        if(error) {
            toast.error(
                "Sorry, an error occurred on our website. Please try reloading the page."
            );
        }
    }, [error]);

    return (
        <main>
            <CatalogCars />
        </main>
    );
};

export default CatalogPage;