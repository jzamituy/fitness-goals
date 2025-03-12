import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Type } from 'class-transformer';
import { NutritionistOrderByWithRelationInput } from './nutritionist-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionistCountAggregateInput } from './nutritionist-count-aggregate.input';
import { NutritionistAvgAggregateInput } from './nutritionist-avg-aggregate.input';
import { NutritionistSumAggregateInput } from './nutritionist-sum-aggregate.input';
import { NutritionistMinAggregateInput } from './nutritionist-min-aggregate.input';
import { NutritionistMaxAggregateInput } from './nutritionist-max-aggregate.input';

@ArgsType()
export class NutritionistAggregateArgs {

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

    @Field(() => NutritionistCountAggregateInput, {nullable:true})
    _count?: NutritionistCountAggregateInput;

    @Field(() => NutritionistAvgAggregateInput, {nullable:true})
    _avg?: NutritionistAvgAggregateInput;

    @Field(() => NutritionistSumAggregateInput, {nullable:true})
    _sum?: NutritionistSumAggregateInput;

    @Field(() => NutritionistMinAggregateInput, {nullable:true})
    _min?: NutritionistMinAggregateInput;

    @Field(() => NutritionistMaxAggregateInput, {nullable:true})
    _max?: NutritionistMaxAggregateInput;
}
