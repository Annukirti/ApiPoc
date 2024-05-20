import { Router } from "express";
import { userRoutes } from "./user/user.routes";

const router: Router = Router();

router.use("/user", userRoutes);
export const apiRouter = router;
