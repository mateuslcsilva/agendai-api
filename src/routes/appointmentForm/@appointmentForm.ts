import { app } from "../../server";
import { getAppointmentForms } from "./getAppointmentForm";
import { getItemsAppointmentForms } from "./getItemsAppointmentForm";
import { saveAppointmentForm } from "./saveAppointmentForm";
import { updateAppointmentForm } from "./updateAppointmentForm";
import { deleteItemAppointmentForm } from "./deleteItemAppointmentForm";
import { deleteAppointmentForm } from "./deleteAppointmentForm";

export const AppointmentFormRoutes = async() => {
    app.register(saveAppointmentForm);
    app.register(getAppointmentForms);
    app.register(updateAppointmentForm);
    app.register(deleteAppointmentForm);
    app.register(getItemsAppointmentForms);
    app.register(deleteItemAppointmentForm);
}