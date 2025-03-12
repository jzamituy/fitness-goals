import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionistUpdateManyMutationInput } from './nutritionist-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyNutritionistArgs {

    @Field(() => NutritionistUpdateManyMutationInput, {nullable:false})
    @Type(() => NutritionistUpdateManyMutationInput)
    data!: NutritionistUpdateManyMutationInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    where?: NutritionistWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
