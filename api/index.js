import { API_URL } from '@/constants/router';
import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:4000',
});

function fetchMoviesList() {
   return instance.get(`${API_URL.PRODUCTS}`);
}

function fetchMovieDetail({ id }) {
   return instance.get(`${API_URL.PRODUCTS}/${id}`);
}
 
export { fetchMoviesList, fetchMovieDetail };