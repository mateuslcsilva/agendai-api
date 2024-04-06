import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { createHash } from "crypto";
import { User } from "../../../types/user";

export const saveUser = async ( app: FastifyInstance) => {
    app.post('/saveUser', (request: FastifyRequest<{ Body: User }>, response: FastifyReply) => {
        const requestBody = request.body;
        const password = createHash('md5').update(requestBody.password).digest("hex");
        console.log(requestBody, password);
        //@ts-ignore
        app.mysql.query(
            `insert into user (name, email, phone, password) values ('${requestBody.name}', '${requestBody.email}', '${requestBody.phone}', '${password}')`,
            function onResult(error: any, result: any){
                if(error) return response.send(error);
                response.send({"status": 200, "mensagem": "Usuário criado com sucesso!!", "userId": result.insertId});
            }
        )
    })
}