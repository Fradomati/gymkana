/* BASIC FUNTIONS */

export const counter = (value) => {
    const result = value.length
    return result
}


/* SHOW PASSWORD */

export const showPass = (value) => {
   return value === "password" ? "text" : "password"
}