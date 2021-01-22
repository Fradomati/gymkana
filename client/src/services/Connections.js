import axios from "axios";
// axios.defaults.headers





// Auth Connection
export const authService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/auth`,
    withCredentials: true
})

/* Generator Connection */

export const generatorService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/generator`,
    withCredentials: true
})

/* Uploads Connection */

export const uploadService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/uploads`,
    withCredentials: true
})
