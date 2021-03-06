import { Request, Response } from "express";
import { CreateActivyService } from '../services/CreateActivyService'
import { GetActivyService } from "../services/GetActiviesService";

class ActivyController {
    async create(request: Request, response:Response){
        const activyData = request.body

        const createActivy = new CreateActivyService()

        const activy = createActivy.execute(activyData);

        return response.json(activy);
    }

    async show(request: Request, response:Response){
        
        const userId = request.body.user;

        const getActivy = new GetActivyService();

        const activies = await getActivy.execute(userId);

        return response.json(activies);
    }
}

export {ActivyController}