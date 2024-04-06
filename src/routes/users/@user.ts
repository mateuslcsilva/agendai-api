import { app } from "../../server";
import { saveUser } from "./saveUser";

export const AppointmentFormRoutes = async() => {
    app.register(saveUser);
}