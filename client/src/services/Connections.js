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

/* Challenger Connection */
export const challengerService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/challenger`,
    withCredentials: true
})

/* Uploads Connection */
export const uploadService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/uploads`,
    withCredentials: true
})

/* Boards Connection */
export const boardService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/board`,
    withCredentials: true
})
