import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { createHash } from "crypto";
import { User } from "../../../types/user";

export const authUser = async ( app: FastifyInstance) => {
    app.post('/authUser', (request: FastifyRequest<{ Body: User }>, response: FastifyReply) => {
        const requestBody = request.body;
        const password = createHash('md5').update(requestBody.password).digest("hex");
        //@ts-ignore
        app.mysql.query(
            `select id from user where email = '${requestBody.email}' and password = '${password}' limit 1`,
            function onResult(error: any, result: any){
                console.log(result);
                if(error) return response.send(error);
                if(result.length == 0) return response.send({"status": 204, "message" : "Usuário ou senha inválidos."})
                response.send({"status": 200, "message": "Logado com sucesso!!", "userId": result[0].insertId});
            }
        )
    })
}