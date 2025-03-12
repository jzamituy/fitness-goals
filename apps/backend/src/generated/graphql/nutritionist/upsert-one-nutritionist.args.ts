import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionistCreateInput } from './nutritionist-create.input';
import { NutritionistUpdateInput } from './nutritionist-update.input';

@ArgsType()
export class UpsertOneNutritionistArgs {

    @Field(() => NutritionistWhereUniqueInput, {nullable:false})
    @Type(() => NutritionistWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => NutritionistCreateInput, {nullable:false})
    @Type(() => NutritionistCreateInput)
    create!: NutritionistCreateInput;

    @Field(() => NutritionistUpdateInput, {nullable:false})
    @Type(() => NutritionistUpdateInput)
    update!: NutritionistUpdateInput;
}
