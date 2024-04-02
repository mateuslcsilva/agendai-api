import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const getAppointmentForms = async ( app: FastifyInstance) => {
    app.get('/getAppointmentForms', (request: FastifyRequest, response: FastifyReply) => {
        //@ts-ignore
        app.mysql.query(
            "select a.*, (select count(id) from items_appointment_form where appointment_form = a.id) as numberOfQuestions from appointment_form as a",
            function onResult(error : any, result : any){
                response.send(error || result);
            },
            function onError(){
                //
            }
        )
    })
}