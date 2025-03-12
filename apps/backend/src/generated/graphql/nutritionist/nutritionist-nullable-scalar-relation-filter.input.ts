import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistWhereInput } from './nutritionist-where.input';

@InputType()
export class NutritionistNullableScalarRelationFilter {

    @Field(() => NutritionistWhereInput, {nullable:true})
    is?: NutritionistWhereInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    isNot?: NutritionistWhereInput;
}
