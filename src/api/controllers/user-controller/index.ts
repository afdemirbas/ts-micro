import express from "express"
import { UserService } from '../../services/user-service';

interface UserControllerInterface {
  create: (req: express.Request, res: express.Response) => <Promise>
}
export class UserController implements UserControllerInterface {
  create = async (req: express.Request, res: express.Response) => {};
}
