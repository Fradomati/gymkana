import { apiGM_GetInfo } from "./Connections"
import { getSumKLM, getSumDuration, getLocality } from "../../lib/Functions/functions"

export const getJSONRoute = async (obj) => {
    const { origin, destination, waypoints } = obj

    // Pass waypoints to necesary format
    let strWaypoints = ""

    waypoints.forEach(e => {
        strWaypoints == "" ? strWaypoints = e : strWaypoints = strWaypoints + "|" + e
    })

    const response = await apiGM_GetInfo.get(
        `json?origin=${origin}&destination=${destination}&waypoints=${strWaypoints}&key=${process.env.TOKEN_GEO_GOOGLEMAPS}`, {
    }
    )
    console.log("Response", response)

    const route = response.data.routes[0].legs
    const arrDistances = route.map(e => {
        return e.distance.value
    })
    const arrTiming = route.map(e => {
        return e.duration.value
    })

    const totalDistance = getSumKLM(arrDistances)
    const totalDuration = getSumDuration(arrTiming)
    const startPoint = route[0].start_address
    const locality = getLocality(startPoint)
    console.log("Localidad", locality)

    return {
        infoRoute: route,
        totalDistance: totalDistance,
        totalDuration: totalDuration,
        startPoint: startPoint,
        locality: locality
    }
}