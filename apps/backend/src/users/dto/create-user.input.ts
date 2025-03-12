import { Field, InputType } from '@nestjs/graphql';
import { UserStatus } from '@prisma/client';
import { IsEmail, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { UserType } from '../enums/user-type.enum';

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

  @Field(() => UserStatus, { defaultValue: UserStatus.ACTIVE })
  status?: UserStatus;

  @Field({ nullable: true })
  imageUrl?: string;
}
