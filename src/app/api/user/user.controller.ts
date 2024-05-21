import { Request, Response } from "express";
import { Controller, Get, Route, Tags } from "tsoa";

@Route("users")
@Tags("User")
export class UserController extends Controller {
  @Get("/")
  getUser() {
    console.log("Hello, I am a GET user API!");
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];
  }

  // createUser(req: Request, res: Response) {
  //   res.send("Hello, I am a POST user API!");
  // }

  // getUserById(req: Request, res: Response) {
  //   res.send("Hello, I am a GET user BY ID API!");
  // }

  // updateUserById(req: Request, res: Response) {
  //   res.send("Hello, I am a UPDATE user API!");
  // }

  // deleteUserById(req: Request, res: Response) {
  //   res.send("Hello, I am a DELETE user API!");
  // }
}
