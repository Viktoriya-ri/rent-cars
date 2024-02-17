import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://65cd2a62dd519126b8403437.mockapi.io',
});

export const requestCars = async(page) => {
    axios.defaults.params = {
        per_page: 12,
        page,
    };
    const {data} = await instance.get('/cars');
    return data;
};

export const requestAllCars = async(id) => {
    const {data} = await instance.get(`/cars/${id}`);

    return data;
}