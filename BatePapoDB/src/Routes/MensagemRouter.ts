import express from "express"
import { MsgController } from "../Controller/MsgController"
import { MsgBusiness } from "../Business/MsgBusiness"
import { MsgDataBase } from "../DataBase/MsgDataBase"
import { IdGenerator } from "../Services/IdGenerator"


export const msgRouter = express.Router()


const msgController = new MsgController(
    new MsgBusiness(
        new MsgDataBase(),
        new IdGenerator()
    )
)

msgRouter.post("/", msgController.createMsg)