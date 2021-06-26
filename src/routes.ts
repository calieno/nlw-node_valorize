import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { ensurAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserControler } from "./controllers/AutenticateUserController"

const router = Router()

const createUserController = new CreateUserController
const createTagController = new CreateTagController
const authenticateUserControler = new AuthenticateUserControler

router.post("/users", createUserController.handle)
router.post("/tags", ensurAdmin, createTagController.handle)
router.post("/login", authenticateUserControler.handle)

export { router }