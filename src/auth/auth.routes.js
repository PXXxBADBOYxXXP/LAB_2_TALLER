import { Router } from "express"
import { register, login, actualizarFotoPerfil} from "./auth.controller.js"
import { registerValidator, loginValidator, updateUserValidator } from "../middlewares/user-validators.js"
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

router.post(
    "/register",
    uploadProfilePicture.single("profilePicture"), 
    registerValidator, 
    register
)
//ACTUALIZAR FOTO DE PERFIL DEL USUARIO
router.put(
    "/actualizarFotoPerfil/:uid",
    uploadProfilePicture.single("profilePicture"),
    updateUserValidator,
    actualizarFotoPerfil
)

router.post(
    "/login",
    loginValidator,
    login
)

export default router
