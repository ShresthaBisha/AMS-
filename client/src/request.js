import axios from 'axios'
import { getAccessToken } from './utils'

const accessToken = getAccessToken()
const url = {
    base: 'http://localhost:4000/api/',
}

const headers = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        token: accessToken,
    },
}

// const axiosFormDataConfig = {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Access-Control-Allow-Origin': '*',
//         'token': accessToken
//     }
// }

const request = {
    get: (path) => axios.get(url.base + path, headers),
    delete: (path) => axios.delete(url.base + path, headers),
    post: (path, data) => axios.post(url.base + path, data, headers),
    put: (path, data) => axios.put(url.base + path, data, headers),
    // postFormData: function (url, data) { return axios.post(`${config.apiEndpoint + url}`, data, axiosFormDataConfig)},
    // putFormData: function (url, data) { return axios.put(`${config.apiEndpoint + url}`, data, axiosFormDataConfig)}
}

export default request
