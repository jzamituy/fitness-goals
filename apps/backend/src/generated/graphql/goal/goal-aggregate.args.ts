import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalWhereInput } from './goal-where.input';
import { Type } from 'class-transformer';
import { GoalOrderByWithRelationInput } from './goal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GoalCountAggregateInput } from './goal-count-aggregate.input';
import { GoalMinAggregateInput } from './goal-min-aggregate.input';
import { GoalMaxAggregateInput } from './goal-max-aggregate.input';

@ArgsType()
export class GoalAggregateArgs {

    @Field(() => GoalWhereInput, {nullable:true})
    @Type(() => GoalWhereInput)
    where?: GoalWhereInput;

    @Field(() => [GoalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GoalOrderByWithRelationInput>;

    @Field(() => GoalWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;

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
