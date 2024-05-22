import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { User } from "../../common";

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

  @Post()
  @SuccessResponse("201", "Created") // Custom success response
  async createUser(@Body() createUserBody: User): Promise<User> {
    return createUserBody;
  }

  async getUserById(@Path() id: number): Promise<User> {
    return {
      name: "string",
      password: "string",
      email: "string",
      age: 2,
    };
  }

  async updateUserById(
    @Path() id: number,
    @Body() updateUserBody: User
  ): Promise<User> {
    console.log("Hello, I am a UPDATE user API!");
    return updateUserBody;
  }

  deleteUserById(@Path() id: number) {
    return "Hello, I am a DELETE user API!";
  }
}
