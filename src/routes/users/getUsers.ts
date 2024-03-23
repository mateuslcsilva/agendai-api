import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const getCostumers = async ( app: FastifyInstance) => {
    app.get('/getCostumers', (request: FastifyRequest, response: FastifyReply) => {
        //@ts-ignore
        app.mysql.query(
            "select * from users",
            function onResult(error : any, result : any){
                response.send(error || result);
            }
        )
    })
}