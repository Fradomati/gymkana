import { uploadService } from "./Connections"


// Function to upload images

export const uploadIMG = async ({ name, file }) => {

    const response = await generatorService.post("/createGame", {
        name,
        file
    })

    return response.data
}