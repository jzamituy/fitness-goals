import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberPlanWhereInput } from './member-plan-where.input';
import { Type } from 'class-transformer';
import { MemberPlanOrderByWithAggregationInput } from './member-plan-order-by-with-aggregation.input';
import { MemberPlanScalarFieldEnum } from './member-plan-scalar-field.enum';
import { MemberPlanScalarWhereWithAggregatesInput } from './member-plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MemberPlanCountAggregateInput } from './member-plan-count-aggregate.input';
import { MemberPlanMinAggregateInput } from './member-plan-min-aggregate.input';
import { MemberPlanMaxAggregateInput } from './member-plan-max-aggregate.input';

@ArgsType()
export class MemberPlanGroupByArgs {

    @Field(() => MemberPlanWhereInput, {nullable:true})
    @Type(() => MemberPlanWhereInput)
    where?: MemberPlanWhereInput;

    @Field(() => [MemberPlanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MemberPlanOrderByWithAggregationInput>;

    @Field(() => [MemberPlanScalarFieldEnum], {nullable:false})
    by!: Array<`${MemberPlanScalarFieldEnum}`>;

    @Field(() => MemberPlanScalarWhereWithAggregatesInput, {nullable:true})
    having?: MemberPlanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MemberPlanCountAggregateInput, {nullable:true})
    _count?: MemberPlanCountAggregateInput;

    @Field(() => MemberPlanMinAggregateInput, {nullable:true})
    _min?: MemberPlanMinAggregateInput;

    @Field(() => MemberPlanMaxAggregateInput, {nullable:true})
    _max?: MemberPlanMaxAggregateInput;
}
