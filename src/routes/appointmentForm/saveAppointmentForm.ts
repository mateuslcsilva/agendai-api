import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { Question } from "../../../types/question";
import { SaveAppointmentForm } from "../../../types/saveAppointmentForm";

export const saveAppointmentForm = async ( app: FastifyInstance) => {
    app.post('/saveAppointmentForm', (request: FastifyRequest<{ Body: SaveAppointmentForm }>, response: FastifyReply) => {
        const requestBody : SaveAppointmentForm = request.body;
        console.log(requestBody);
        try{
            //@ts-ignore
            app.mysql.query(
                "insert into appointment_form (form_name) values ('teste nome form')",
                function onResult(error : any, result : any){
                    if(error) return response.send(error);
                    let queryItems = '';
                    requestBody.questions.forEach((question : Question, index: number) => {
                        queryItems += `('${question.question}', '${question.type.toUpperCase()}', '${result.insertId}')${++index < requestBody.questions.length ? ',' : ''}`
                    })
                    //@ts-ignore
                    app.mysql.query(
                        `insert into items_appointment_form (question, type, appointment_form) values ${queryItems}`,
                        function onResult(errorItems: any, resultItems: any){
                            response.send(errorItems || resultItems);
                        },
                        function onError(){
                            //
                        }
                    )
                }
            )
        } catch(error){
            console.log(error)
        }

    })
}