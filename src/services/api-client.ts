import axios from "axios"; 


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2e3d9d04e0d641e995dec8cba22c6dcc'
    }
})