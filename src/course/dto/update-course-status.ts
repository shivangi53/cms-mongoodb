import { IsEnum } from "@nestjs/class-validator";
import { CourseStatus } from "../schema/course.schema";

export class UpdateCourseStatusDTO
{
    @IsEnum(CourseStatus)
    status: CourseStatus;
}