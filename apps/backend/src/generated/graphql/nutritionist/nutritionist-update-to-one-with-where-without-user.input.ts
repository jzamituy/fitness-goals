import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Type } from 'class-transformer';
import { NutritionistUpdateWithoutUserInput } from './nutritionist-update-without-user.input';

@InputType()
export class NutritionistUpdateToOneWithWhereWithoutUserInput {

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    where?: NutritionistWhereInput;

    @Field(() => NutritionistUpdateWithoutUserInput, {nullable:false})
    @Type(() => NutritionistUpdateWithoutUserInput)
    data!: NutritionistUpdateWithoutUserInput;
}
