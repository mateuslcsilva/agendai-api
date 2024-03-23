import { app } from "../../server";
import { getAppointmentForms } from "./getAppointmentForm";
import { saveAppointmentForm } from "./saveAppointmentForm";
import { updateAppointmentForm } from "./updateAppointmentForm";
import { updateItemAppointmentForm } from "./updateItemAppointmentForm";

export const AppointmentFormRoutes = async() => {
    app.register(saveAppointmentForm);
    app.register(getAppointmentForms);
    app.register(updateAppointmentForm);
    app.register(updateItemAppointmentForm);
}