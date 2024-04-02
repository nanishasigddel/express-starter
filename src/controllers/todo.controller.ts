import { NextFunction, Request, Response } from "express"
import as TodoService from '../service/todo.service' 

export const getAll = (req: Request, res: Response, next: NextFunction) => {
    const todos = TodoServices.getTodos()
    res.send(todos)
} 

//typescript curd ssh setup codecademy