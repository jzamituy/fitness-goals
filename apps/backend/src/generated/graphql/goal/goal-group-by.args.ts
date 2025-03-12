import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalWhereInput } from './goal-where.input';
import { Type } from 'class-transformer';
import { GoalOrderByWithAggregationInput } from './goal-order-by-with-aggregation.input';
import { GoalScalarFieldEnum } from './goal-scalar-field.enum';
import { GoalScalarWhereWithAggregatesInput } from './goal-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GoalCountAggregateInput } from './goal-count-aggregate.input';
import { GoalMinAggregateInput } from './goal-min-aggregate.input';
import { GoalMaxAggregateInput } from './goal-max-aggregate.input';

@ArgsType()
export class GoalGroupByArgs {

    @Field(() => GoalWhereInput, {nullable:true})
    @Type(() => GoalWhereInput)
    where?: GoalWhereInput;

    @Field(() => [GoalOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GoalOrderByWithAggregationInput>;

    @Field(() => [GoalScalarFieldEnum], {nullable:false})
    by!: Array<`${GoalScalarFieldEnum}`>;

    @Field(() => GoalScalarWhereWithAggregatesInput, {nullable:true})
    having?: GoalScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GoalCountAggregateInput, {nullable:true})
    _count?: GoalCountAggregateInput;

    @Field(() => GoalMinAggregateInput, {nullable:true})
    _min?: GoalMinAggregateInput;

    @Field(() => GoalMaxAggregateInput, {nullable:true})
    _max?: GoalMaxAggregateInput;
}
