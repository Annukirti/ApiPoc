import { Controller, Get, Route, Tags } from "tsoa";

@Route("product")
@Tags("Product")
export class ProductController extends Controller {
  @Get("/")
  getProducts() {
    console.log("Hello, I am a GET user API!");
    return [
      { id: 1, name: "Annukirti" },
      { id: 2, name: "Riya" },
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
