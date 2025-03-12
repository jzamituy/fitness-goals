import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneNutritionistArgs {

    @Field(() => NutritionistWhereUniqueInput, {nullable:false})
    @Type(() => NutritionistWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;
}
