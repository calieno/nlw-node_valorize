import { EntityRepository, Repository} from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User)
<<<<<<< HEAD
class UserRepositories extends Repository<User>{}
=======
class UserRepositories extends Repository<User>{
    
}
>>>>>>> 0546a5b1931039f44cb3cb3cae6d14810c6df5f9

export {UserRepositories}