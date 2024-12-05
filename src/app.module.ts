import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    // Config the environemnt
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    // configure the database Module
    MongooseModule.forRoot(process.env.DB_URI),
    CourseModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
