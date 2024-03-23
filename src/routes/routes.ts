import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"  
import mysql from '@fastify/mysql';
import { app } from "../server";

export const saveAppointment = async ( app: FastifyInstance) => {
    app.post('/saveAppointment', (request: FastifyRequest, response: FastifyReply) => {
        app.mysql.query(
            "insert into appointment_form ...",
            function onResult(error : any, result : any){
                response.send(error || result);
            }
        )
    })
}

export const getAppointments = async ( app: FastifyInstance) => {
    app.get('/getAppointments', (request: FastifyRequest, response: FastifyReply) => {
        app.mysql.query(
            "select * from appointment_form",
            function onResult(error : any, result : any){
                response.send(error || result);
            }
        )
    })
}

export const routes = async () => {
    app.register(saveAppointment);
    app.register(getAppointments);
}