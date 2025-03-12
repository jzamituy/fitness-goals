import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutNutritionistInput } from './user-update-without-nutritionist.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNutritionistInput } from './user-create-without-nutritionist.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutNutritionistInput {

    @Field(() => UserUpdateWithoutNutritionistInput, {nullable:false})
    @Type(() => UserUpdateWithoutNutritionistInput)
    update!: UserUpdateWithoutNutritionistInput;

    @Field(() => UserCreateWithoutNutritionistInput, {nullable:false})
    @Type(() => UserCreateWithoutNutritionistInput)
    create!: UserCreateWithoutNutritionistInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
