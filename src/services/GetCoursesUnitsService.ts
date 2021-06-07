import {getRepository} from 'typeorm';
import {CourseUnit} from '../model/CourseUnit';

interface UserId {
    id?: string
}

class GetCoursesUnitsService {
    public async execute({id}: UserId){

        const CourseUnitRepository = getRepository(CourseUnit);

        const courseUnits = await CourseUnitRepository.find();

        if (!courseUnits) {
            return {
                message: 'Course Unit not found'
            }
        }

        return 
            courseUnits;
    }
}

export {GetCoursesUnitsService}