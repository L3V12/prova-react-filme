import Axios from 'axios';

const api = Axios.create({ baseURL: 'https://api.themoviedb.org/3/search/' });

export default api;