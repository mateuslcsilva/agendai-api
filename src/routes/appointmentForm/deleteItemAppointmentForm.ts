import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const deleteItemAppointmentForm = async ( app: FastifyInstance) => {
    app.post('/deleteItemAppointmentForm/:itemsAppointmentFormId', (request: FastifyRequest<{Params: {itemsAppointmentFormId: number}}>, response: FastifyReply) => {
        //@ts-ignore
        app.mysql.query(
            `delete from items_ where id = '${request.params.itemsAppointmentFormId}}'`,
            function onResult(error : any, result : any){
                if(error) return response.send(error);
                response.send({"status": 200, "message": "Pergunta deletada com sucesso."});
            }
        )
    })
}