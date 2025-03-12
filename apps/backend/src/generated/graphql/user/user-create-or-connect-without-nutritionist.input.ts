import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNutritionistInput } from './user-create-without-nutritionist.input';

@InputType()
export class UserCreateOrConnectWithoutNutritionistInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutNutritionistInput, {nullable:false})
    @Type(() => UserCreateWithoutNutritionistInput)
    create!: UserCreateWithoutNutritionistInput;
}
