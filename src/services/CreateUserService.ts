import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest ){
        const userRepository = getCustomRepository(UserRepositories)

        if (!email) {
            throw new Error("Email incorrect")
        }
        const userAlreadyExists = await userRepository.findOne({
            email,
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const user = userRepository.create({
            name,
            email,
            admin
        })

<<<<<<< HEAD
        await UserRepository.save(user)
=======
        await userRepository.save(user)

>>>>>>> 0546a5b1931039f44cb3cb3cae6d14810c6df5f9
        return user
    }
}

export { CreateUserService }