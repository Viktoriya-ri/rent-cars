import axios from 'axios';

axios.defaults.baseURL = `https://65cd2a62dd519126b8403437.mockapi.io`;


const LIMIT = "12";

export const requestAllCars = async (params) => {
  for (var key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }

  var searchParams = new URLSearchParams(params);

  var queryString = searchParams.toString();

  const { data } = await axios(`/adverts?limit=${LIMIT}&${queryString}`);

  return data;
};