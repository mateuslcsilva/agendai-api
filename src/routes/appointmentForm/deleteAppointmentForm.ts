import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const deleteAppointmentForm = async ( app: FastifyInstance) => {
    app.delete('/deleteAppointmentForm/:appointmentFormId', (request: FastifyRequest<{Params: {appointmentFormId: number}}>, response: FastifyReply) => {
        //@ts-ignore
        app.mysql.query(
            `delete from appointment_form where id = ${request.params.appointmentFormId}`,
            function onResult(error : any, result : any){
                if(error) return response.send(error);
                //@ts-ignore
                app.mysql.query(
                    `delete from items_appointment_form where appointment_form = ${request.params.appointmentFormId}`,
                    function onResult(errorItem : any, resultItem : any){
                        if(errorItem) return response.send({"status": 500, "message": "O formulário foi deletado, mas houve um problema para deletar as questões"});
                        response.send({"status": 200, "message": "Formulário deletado com sucesso."});
                    }
                )
            }
        )
    })
}