import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionistUpdateInput } from './nutritionist-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';

@ArgsType()
export class UpdateOneNutritionistArgs {

    @Field(() => NutritionistUpdateInput, {nullable:false})
    @Type(() => NutritionistUpdateInput)
    data!: NutritionistUpdateInput;

    @Field(() => NutritionistWhereUniqueInput, {nullable:false})
    @Type(() => NutritionistWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;
}
