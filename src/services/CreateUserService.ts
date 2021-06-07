  
import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {User} from '../model/User'

interface UserData {
    name:string;
    email:string;
    password:string;
}

class CreateUserService {
    
    public async execute({name,email,password}: UserData): Promise<User | {}>{

        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({email})

        if(checkUserExists){
            return {
                error:"Email adrres already exist"
            }
        }

        const hashedPassowrd = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: hashedPassowrd
        });

        await userRepository.save(user);

        return user;

    }

}

export {CreateUserService}