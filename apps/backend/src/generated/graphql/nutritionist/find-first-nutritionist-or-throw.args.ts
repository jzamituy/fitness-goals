import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Type } from 'class-transformer';
import { NutritionistOrderByWithRelationInput } from './nutritionist-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionistScalarFieldEnum } from './nutritionist-scalar-field.enum';

@ArgsType()
export class FindFirstNutritionistOrThrowArgs {

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    where?: NutritionistWhereInput;

    @Field(() => [NutritionistOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionistOrderByWithRelationInput>;

    @Field(() => NutritionistWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutritionistScalarFieldEnum], {nullable:true})
    distinct?: Array<`${NutritionistScalarFieldEnum}`>;
}
