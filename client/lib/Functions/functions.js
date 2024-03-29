/* <---- RESOURCES FUNCTIONS ----> */

/* 
A = %C3%81
E = %C3%A9
I = %C3%AD
O = %C3%B3
U = %C3%9A
Ñ = %C3%B1
 */

const swapCharacters = (value) => {
    switch (value) {
        case '%C3%A1':
        case '%C3%81':
            console.log('A');
            return "a";
            break;
        case '%C3%A9':
            console.log('E');
            return "e";
            break;
        case '%C3%AD':
            console.log('I');
            return "i";
            break;
        case '%C3%B3':
            console.log('O');
            return "o";
            break;
        case '%C3%9A':
            console.log('U');
            return "ñ";
            break;
        case '%C3%B1':
            console.log('Ñ');
            return "n";
            break;
        default:
            console.log('No localizamos esta letra ' + value + '.');
    }
}


/* <---- EXPORT FUNCTIONS ----> */


// Check special character of Coords
export const checkCharacter = (value) => {
    let strg = value
    let result = ""

    if (strg.includes("%C3%")) {
        let index = strg.indexOf("%")
        let character = strg.slice(index, index + 6)
        let newCharacter = swapCharacters(character)

        let arr = strg.split("")
        arr.splice(index, 6, newCharacter)
        console.log(arr)
        arr.forEach(e => {
            result = result + e
        })

    } else { result = value }
    return result
}





// Get current age
export const userAge = (birthday) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const arrBirthday = birthday.split("-")
    const userYear = arrBirthday[0]
    const userMonth = arrBirthday[1]
    const userDay = arrBirthday[2]


    const age = yyyy - userYear

    return dd + (mm * 30) < userDay + (userMonth * 30) ? age - 1 : age
}

// Get Coords from URL Google Maps
export const urlToCoords = (url) => {
    let arr = url.split("dir/")[1].split("data")[0].split("/")
    let arrCleaned = []
    arr.forEach(e => {
        if (e != "" && e != "am=t") {
            arrCleaned.push(e)
        }
    })
    let lastElement = arrCleaned[arrCleaned.length - 1].split("@")[1].split("z")[0]
    arrCleaned.pop()
    arrCleaned.push(lastElement)

    return arrCleaned
}

// Convert array of strings to array of arrays
export const arrayOfArrays = (array) => {
    const newArray = []
    array.forEach(e => {
        newArray.push(e.split(","))
    })
    return newArray
}


// Get Origin - Destination - Waypoints

export const getDirectionsObj = (arr) => {
    let arrCoords = arr
    if (arrCoords.length > 2) {
        const origin = arrCoords.shift()
        const destination = arrCoords.pop()
        const waypoints = arrCoords
        return { origin: origin, destination: destination, waypoints: waypoints }
    } else if (arrCoords.length == 2) {
        return { origin: arrCoords[0], destination: arrCoords[1] }
    } else if (arrCoords.length <= 1) {
        return null
    }

}


// DISTANCE: Pass meters to kilometers ------------->

// Pass individual distances to kilometers
export const getKLM = (meters) => {
    return meters / 1000
}

// Sum array of kilometers 
export const getSumKLM = (arr) => {
    let result = 0
    arr.forEach(e => {
        result = result + getKLM(e)
    })
    console.log("TOTAL KILOMETERS", result)
    return result
}

// DURATION: Pass secs to mins --------------------->

// Create Object {hour, mint, sec}
export const fnMountTime = (secs) => {
    let h = Math.floor(secs / 60 / 60);
    let m = Math.floor(secs / 60) - h * 60;
    let s = Math.floor(secs % 60);
    const userTime = { hour: h, min: m, sec: s };
    return userTime;
};

// Sum array of secs 
export const getSumDuration = (arr) => {
    let result = 0
    arr.forEach(e => {
        result = result + e
    })
    return fnMountTime(result)
}

// LOCATION: Get "localidad" of address ----------->
export const getLocality = (str) => {
    const arr = str.split(",")
    return arr[1]
}

// Time Duration to Done Game
export const timeToEnd = (start) => {
    let difTime = (Date.now() - Date.parse(start))
    const hours = Math.floor((difTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difTime / (1000 * 60)) % 60)
    const seconds = Math.floor((difTime / 1000) % 60)
    return { hours: hours, minutes: minutes, seconds: seconds }
}