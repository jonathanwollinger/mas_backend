import {getRepository} from 'typeorm';
import {Activy} from '../model/Activy';

interface UserId {
    id?: string
}

class GetActivyService {
    public async execute({id}: UserId){

        const activyRepository = getRepository(Activy);

        const activy = await activyRepository.find();

        if (!activy) {
            return {
                message: 'Activy not found'
            }
        }

        return 
            activy;
    }
}

export {GetActivyService}