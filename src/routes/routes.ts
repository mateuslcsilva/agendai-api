import { app } from "../server";
import { AppointmentFormRoutes } from "./appointmentForm/@appointmentForm";
import { UsersRoutes } from "./users/@user";

export const routes = async () => {
    app.register(AppointmentFormRoutes);
    app.register(UsersRoutes);
}