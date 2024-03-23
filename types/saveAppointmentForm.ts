import { Question } from "./question";

export interface SaveAppointmentForm{
    form_name: string,
    questions: Array<Question>
}