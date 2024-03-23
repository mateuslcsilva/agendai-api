import { app } from "../server";
import { AppointmentFormRoutes } from "./appointmentForm/@appointmentForm";

export const routes = async () => {
    app.register(AppointmentFormRoutes);
}