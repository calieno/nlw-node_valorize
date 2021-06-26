import { Request, Response } from "express"
import { CreateComplimentService } from "../services/CreateComplimentsService"

class CreateComplimentsController{
    async handle(request: Request, response: Response){
        const { tag_id, user_receiver, user_sender, message } = request.body
        const createComplimentsService = new CreateComplimentService()

        const compliment = await createComplimentsService.execute({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        return response.json(compliment)
    }

}

export { CreateComplimentsController }