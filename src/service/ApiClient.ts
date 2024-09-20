import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '92d5b686382a483e90d1216b54006d87'
    }
})