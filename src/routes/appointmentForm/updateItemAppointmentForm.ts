import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { Question } from "../../../types/question";
import { SaveAppointmentForm } from "../../../types/saveAppointmentForm";

export const updateItemAppointmentForm = async ( app: FastifyInstance) => {
    app.post('/updateItemAppointmentForm', (request: FastifyRequest<{ Body: SaveAppointmentForm }>, response: FastifyReply) => {
        const requestBody : SaveAppointmentForm = request.body;
        //@ts-ignore
/*         app.mysql.query(
            "insert into appointment_form (form_name) values ('teste nome form')",
            function onResult(error : any, result : any){
                let queryItems = '';
                requestBody.questions.forEach((question : Question, index: number) => {
                    queryItems += `('${question.question}', '${question.type.toUpperCase()}', '${result.insertId}')${++index < requestBody.questions.length ? ',' : ''}`
                })
                //@ts-ignore
                app.mysql.query(
                    `insert into items_appointment_form (question, type, appointment_form) values ${queryItems}`,
                    function onResult(errorItems: any, resultItems: any){
                        response.send(errorItems || resultItems);
                    }
                )
            }
        ) */
    })
}