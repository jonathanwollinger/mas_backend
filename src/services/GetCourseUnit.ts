import {getRepository} from 'typeorm';
import {CourseUnit} from '../model/CourseUnit';

interface UserId {
    id?: string
}

class GetCourseUnit {
    public async execute({id}: UserId){

        const CourseUnitRepository = getRepository(CourseUnit);

        const courseUnit = await CourseUnitRepository.find();

        if (!courseUnit) {
            return {
                message: 'Course Unit not found'
            }
        }

        return 
            courseUnit;
    }
}

export {GetCourseUnit}