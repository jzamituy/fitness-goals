import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNutritionistInput } from './user-create-without-nutritionist.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNutritionistInput } from './user-create-or-connect-without-nutritionist.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutNutritionistInput {

    @Field(() => UserCreateWithoutNutritionistInput, {nullable:true})
    @Type(() => UserCreateWithoutNutritionistInput)
    create?: UserCreateWithoutNutritionistInput;

    @Field(() => UserCreateOrConnectWithoutNutritionistInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNutritionistInput)
    connectOrCreate?: UserCreateOrConnectWithoutNutritionistInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
