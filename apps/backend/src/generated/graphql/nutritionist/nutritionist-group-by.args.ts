import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Type } from 'class-transformer';
import { NutritionistOrderByWithAggregationInput } from './nutritionist-order-by-with-aggregation.input';
import { NutritionistScalarFieldEnum } from './nutritionist-scalar-field.enum';
import { NutritionistScalarWhereWithAggregatesInput } from './nutritionist-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NutritionistCountAggregateInput } from './nutritionist-count-aggregate.input';
import { NutritionistAvgAggregateInput } from './nutritionist-avg-aggregate.input';
import { NutritionistSumAggregateInput } from './nutritionist-sum-aggregate.input';
import { NutritionistMinAggregateInput } from './nutritionist-min-aggregate.input';
import { NutritionistMaxAggregateInput } from './nutritionist-max-aggregate.input';

@ArgsType()
export class NutritionistGroupByArgs {

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    where?: NutritionistWhereInput;

    @Field(() => [NutritionistOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NutritionistOrderByWithAggregationInput>;

    @Field(() => [NutritionistScalarFieldEnum], {nullable:false})
    by!: Array<`${NutritionistScalarFieldEnum}`>;

    @Field(() => NutritionistScalarWhereWithAggregatesInput, {nullable:true})
    having?: NutritionistScalarWhereWithAggregatesInput;

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
