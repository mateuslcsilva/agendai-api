import { app } from "../../server";
import { getAppointmentForms } from "./getAppointmentForm";
import { getItemsAppointmentForms } from "./getItemsAppointmentForm";
import { saveAppointmentForm } from "./saveAppointmentForm";
import { updateAppointmentForm } from "./updateAppointmentForm";
import { deleteItemAppointmentForm } from "./deleteItemAppointmentForm";

export const AppointmentFormRoutes = async() => {
    app.register(saveAppointmentForm);
    app.register(getAppointmentForms);
    app.register(updateAppointmentForm);
    app.register(deleteItemAppointmentForm);
    app.register(getItemsAppointmentForms);
}