import { CreateMsgInputDTO, CreateMsgOutputDTO } from "../DTO/MsgDTO";
import { MsgDataBase } from "../DataBase/MsgDataBase";
import { Msg } from "../Models/MsgModel";


import { IdGenerator } from "../Services/IdGenerator";






export class MsgBusiness{


    constructor(
        private msgDataBase: MsgDataBase,
        private Idgen: IdGenerator
    ){}


    public createMSG = async( input: CreateMsgInputDTO): Promise <CreateMsgOutputDTO> =>{

        const{

            mensagem

        } = input


        const id = this.Idgen.generate()
        const createdAt = new Date().toISOString()
        



        const newMsg = new Msg(

            id,
            mensagem,
            createdAt
        )

        
        const msgDB = newMsg.msgToDBModel()

        await this.msgDataBase.insert(msgDB)


        const text = "sucesso"

        const output: CreateMsgOutputDTO = {
            text
        }


        return output
    }
}