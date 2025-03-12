import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoodWhereInput } from './mood-where.input';
import { Type } from 'class-transformer';
import { MoodOrderByWithAggregationInput } from './mood-order-by-with-aggregation.input';
import { MoodScalarFieldEnum } from './mood-scalar-field.enum';
import { MoodScalarWhereWithAggregatesInput } from './mood-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MoodCountAggregateInput } from './mood-count-aggregate.input';
import { MoodMinAggregateInput } from './mood-min-aggregate.input';
import { MoodMaxAggregateInput } from './mood-max-aggregate.input';

@ArgsType()
export class MoodGroupByArgs {

    @Field(() => MoodWhereInput, {nullable:true})
    @Type(() => MoodWhereInput)
    where?: MoodWhereInput;

    @Field(() => [MoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MoodOrderByWithAggregationInput>;

    @Field(() => [MoodScalarFieldEnum], {nullable:false})
    by!: Array<`${MoodScalarFieldEnum}`>;

    @Field(() => MoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: MoodScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoodCountAggregateInput, {nullable:true})
    _count?: MoodCountAggregateInput;

    @Field(() => MoodMinAggregateInput, {nullable:true})
    _min?: MoodMinAggregateInput;

    @Field(() => MoodMaxAggregateInput, {nullable:true})
    _max?: MoodMaxAggregateInput;
}
