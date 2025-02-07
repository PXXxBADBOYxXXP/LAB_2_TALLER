import { Router } from "express";
import { actualizarCitas, cancelarCitas, getCitas, saveAppointment } from "./appointment.controller.js";
import { actualizarCitasValidator, createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();
//CREAR CITAS
router.post("/createAppointment", createAppointmentValidator, saveAppointment);
//LISTAR CITAS
router.get("/listarCitas", getCitas)
//RECHAZAR CITAS
router.put("/cancelarCita/:uid", cancelarCitas)
//ACTUALIZAR CITAS
router.put(
    "/actualizarCitas/:uid",
    actualizarCitasValidator,
    actualizarCitas
)
export default router;