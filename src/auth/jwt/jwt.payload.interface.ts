import { UserRole } from "../schema/user.schema";

export interface JwtPayload {
   email: string; // email or id
   role: UserRole
}