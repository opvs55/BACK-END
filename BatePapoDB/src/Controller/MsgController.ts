import { Request, Response } from "express";
import { MsgBusiness } from "../Business/MsgBusiness";
import { CreateMsgInputDTO } from "../DTO/MsgDTO";
import { BaseError } from "../Errors/BaseError";




export class MsgController{

    constructor(
        private msgBusiness: MsgBusiness
    ){}


    public createMsg = async ( req: Request, res: Response) => {


        try{
            const input: CreateMsgInputDTO = {

                mensagem: req.body.mensagem
                
            }

            const output = await this.msgBusiness.createMSG(input)


            res.status(201).send(output)

        } catch(error){

            if (error instanceof BaseError) {
                console.log(error)
                res.status(error.statusCode).send(error.message)
            } else {
                console.log(error)
                res.status(500).send("erro inesperado")
            }

        }
    }

}