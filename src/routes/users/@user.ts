import { app } from "../../server";
import { saveUser } from "./saveUser";

export const UsersRoutes = async() => {
    app.register(saveUser);
}