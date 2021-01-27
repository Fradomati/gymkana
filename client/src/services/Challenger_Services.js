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