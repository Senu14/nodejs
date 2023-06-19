import  express  from "express";
import UserController from "../Controllers/user.controller.js";

const UserRouter = express.Router();
const controller = new UserController();

UserRouter.get ('/api/user', (req, res) => { controller.list(req, res) })
UserRouter.get ('/api/user/:id([0-9]*)', (req, res) => { controller.details(req, res) })
UserRouter.post ('/api/user', (req, res) => { controller.create(req, res) })
UserRouter.put ('/api/user/:id([0-9]*)', (req, res) => { controller.update(req, res) })
UserRouter.delete ('/api/user', (req, res) => { controller.delete(req, res) })

export default UserRouter;