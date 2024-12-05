//  create a user Model

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export const enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}
@Schema(
  {
    timestamps: true
  }
)

export class User {
  @Prop(
    {
      type: String,
      unique: true
    }
  )
  id: string;
  
  @Prop(
    {
      type: String
    }
  )
  name: string;
  @Prop(
    {
      type: String,
      unique: true
    }
  )
  email: string;
  @Prop(
    {
      type: String,            
    }
  )

  password: string;
  @Prop()
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
