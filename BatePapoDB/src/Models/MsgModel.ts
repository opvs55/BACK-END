import { MsgDB } from "../Interfaces/Msg.Types"

export class Msg{

    constructor(
        private id: string,
        private mensagem:string,
        private createdAt:string
    ){}


    public getId(): string{
        return this.id
    }

    public setId(value:string):void{
        this.id = value
    }

    public getMsg():string{
        return this.mensagem
    }

    public setMsg(value:string):void{
        this.id = value
    }

    public getDate():string{
        return this.createdAt
    }

    public setDate(value:string):void{
        this.id = value
    }


    public msgToDBModel():MsgDB{
        return{
            id: this.id,
            mensagem: this.mensagem,
            created_at: this.createdAt
        }
    }
}