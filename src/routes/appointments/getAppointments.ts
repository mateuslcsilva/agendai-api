import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const getAppointment = async ( app: FastifyInstance) => {
    app.get('/getAppointment', (request: FastifyRequest, response: FastifyReply) => {
        //@ts-ignore
        app.mysql.query(
            "select * from appointments",
            function onResult(error : any, result : any){
                response.send(error || result);
            }
        )
    })
}