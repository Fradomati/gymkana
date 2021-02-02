import { challengerService } from "./Connections";

export const addChallengerFN = async ({ game_id, title, description, urls, images, imagesEbb_IMG, freeClue, premiumClue, answer }) => {

    const response = await challengerService.post("/addChallenger", {
        game_id,
        title,
        description,
        urls,
        images,
        imagesEbb_IMG,
        freeClue,
        premiumClue,
        answer
    })

    return response.data

}

export const modifyChallengerFN = async ({ title, description, urls, images, imagesEbb_IMG, freeClue, premiumClue, answer, idChallenger }) => {
    const response = await challengerService.post("/modifyChallenger", {
        title,
        description,
        urls,
        images,
        imagesEbb_IMG,
        freeClue,
        premiumClue,
        answer,
        idChallenger
    })

    return response.data
}

export const findChallengerFN = async (challenger_id) => {


    console.log("Id", challenger_id)
    const response = await challengerService.post("/getChallenger", {
        challenger_id
    })

    return response.data
}