import fastify from 'fastify';
import { routes } from './routes/routes';
import cors from '@fastify/cors';
import mysql from '@fastify/mysql';

export const app = fastify();
app.register(routes);
app.register(cors, {});
/* app.register(mysql, {
    //connectionString: 'mysql://mateus:3003@localhost:3306/agendai'
    //@ts-ignore
    connectionString: `mysql://mateus:agendai3003$$@localhost:3306/agendai`
});
 */
app.listen({port: 3003}, (error, address) => {
    if(error){
        console.log(error);
    }

    console.log(`Server rodando na 3003`)
})