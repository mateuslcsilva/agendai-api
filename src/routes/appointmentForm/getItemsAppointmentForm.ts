import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { Question } from "../../../types/question";

export const getItemsAppointmentForms = async ( app: FastifyInstance) => {
    app.get('/getItemsAppointmentForms/:form_id', (request: FastifyRequest<{Params: {form_id: number}}>, response: FastifyReply) => {
/*         response.send(`select * from items_appointment_form where appointment_form = '${request.params.form_id}'`);
        return; */
        //@ts-ignore
        app.mysql.query(
            `select * from items_appointment_form where appointment_form = '${request.params.form_id}'`,
            function onResult(error : any, result : Array<Question>){
                let res: Array<Question> = [];
                result.forEach(resultItem => {
                    res.push({
                        ...resultItem, 
                        //@ts-ignore
                        'question': resultItem.question.toString('utf8')
                    });
                })
                response.send(res)
            }
        )
    })
}