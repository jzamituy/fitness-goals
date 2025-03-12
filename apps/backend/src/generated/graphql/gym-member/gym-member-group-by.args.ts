import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberOrderByWithAggregationInput } from './gym-member-order-by-with-aggregation.input';
import { GymMemberScalarFieldEnum } from './gym-member-scalar-field.enum';
import { GymMemberScalarWhereWithAggregatesInput } from './gym-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GymMemberCountAggregateInput } from './gym-member-count-aggregate.input';
import { GymMemberMinAggregateInput } from './gym-member-min-aggregate.input';
import { GymMemberMaxAggregateInput } from './gym-member-max-aggregate.input';

@ArgsType()
export class GymMemberGroupByArgs {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => [GymMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GymMemberOrderByWithAggregationInput>;

    @Field(() => [GymMemberScalarFieldEnum], {nullable:false})
    by!: Array<`${GymMemberScalarFieldEnum}`>;

    @Field(() => GymMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: GymMemberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GymMemberCountAggregateInput, {nullable:true})
    _count?: GymMemberCountAggregateInput;

    @Field(() => GymMemberMinAggregateInput, {nullable:true})
    _min?: GymMemberMinAggregateInput;

    @Field(() => GymMemberMaxAggregateInput, {nullable:true})
    _max?: GymMemberMaxAggregateInput;
}
