import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutNutritionistInput } from './user-update-without-nutritionist.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutNutritionistInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutNutritionistInput, {nullable:false})
    @Type(() => UserUpdateWithoutNutritionistInput)
    data!: UserUpdateWithoutNutritionistInput;
}
