import { app } from "../../server";
import { authUser } from "./authUser";
import { saveUser } from "./saveUser";

export const UsersRoutes = async() => {
    app.register(saveUser);
    app.register(authUser);
}