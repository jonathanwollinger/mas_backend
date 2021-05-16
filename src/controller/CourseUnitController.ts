import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import { GetCourseUnit } from '../services/GetCourseUnit';

class CourseUnitController {
    async create(request:Request, response:Response){
        const courseUnitData = request.body;

        const createCourseUnit = new CreateCourseUnitService()

        const courseUnit = createCourseUnit.execute(courseUnitData);

        return response.json(courseUnit);
    }

    async show(request: Request, response:Response){
        
        const userId = request.body.user

        const getCourseUnit = new GetCourseUnit();

        const courseUnit = await getCourseUnit.execute(userId);

        return response.json(courseUnit);
    }
}

export {CourseUnitController}