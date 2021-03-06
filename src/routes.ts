import { response, Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { ensurAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserControler } from "./controllers/AutenticateUserController"
import { CreateComplimentsController } from "./controllers/CreateComplimentsController"
import { request } from "http"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserControler = new AuthenticateUserControler()
const createComplimentsController = new CreateComplimentsController()

router.post("/users", createUserController.handle)
router.post("/tags", ensurAdmin, createTagController.handle)
router.post("/login", authenticateUserControler.handle)
router.post("/compliments", createComplimentsController.handle )
router.get("/", (request, response) => {
    response.send("- NLW -")
})

export { router }