import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNutritionistInput } from './user-create-without-nutritionist.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNutritionistInput } from './user-create-or-connect-without-nutritionist.input';
import { UserUpsertWithoutNutritionistInput } from './user-upsert-without-nutritionist.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutNutritionistInput } from './user-update-to-one-with-where-without-nutritionist.input';

@InputType()
export class UserUpdateOneRequiredWithoutNutritionistNestedInput {

    @Field(() => UserCreateWithoutNutritionistInput, {nullable:true})
    @Type(() => UserCreateWithoutNutritionistInput)
    create?: UserCreateWithoutNutritionistInput;

    @Field(() => UserCreateOrConnectWithoutNutritionistInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNutritionistInput)
    connectOrCreate?: UserCreateOrConnectWithoutNutritionistInput;

    @Field(() => UserUpsertWithoutNutritionistInput, {nullable:true})
    @Type(() => UserUpsertWithoutNutritionistInput)
    upsert?: UserUpsertWithoutNutritionistInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutNutritionistInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutNutritionistInput)
    update?: UserUpdateToOneWithWhereWithoutNutritionistInput;
}
