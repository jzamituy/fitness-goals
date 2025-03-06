import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { UserType } from '../models/user.model';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  firstName: string;

  @Field()
  @IsString()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phone?: string;

  @Field()
  dateOfBirth: Date;

  @Field(() => UserType)
  @IsEnum(UserType)
  userType: UserType;

  @Field({ nullable: true })
  @IsUUID()
  @IsOptional()
  coachId?: string;

  @Field({ nullable: true })
  @IsUUID()
  @IsOptional()
  nutritionistId?: string;
}
