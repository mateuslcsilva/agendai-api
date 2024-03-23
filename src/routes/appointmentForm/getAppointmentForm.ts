import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const getAppointmentForms = async ( app: FastifyInstance) => {
    app.get('/getAppointmentForms', (request: FastifyRequest, response: FastifyReply) => {
        //@ts-ignore
        app.mysql.query(
            "select * from appointment_form",
            function onResult(error : any, result : any){
                response.send(error || result);
            }
        )
    })
}