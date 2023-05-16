import { MsgDB } from "../Interfaces/Msg.Types";
import { BaseDatabase } from "./BaseDataBase";



export class MsgDataBase extends BaseDatabase{


    public static TABLE_MENSAGEM = "mensagem"


    public insert = async(msgDB: MsgDB) => {
        await BaseDatabase
            .connection(MsgDataBase.TABLE_MENSAGEM)
            .insert(msgDB)
    }
}