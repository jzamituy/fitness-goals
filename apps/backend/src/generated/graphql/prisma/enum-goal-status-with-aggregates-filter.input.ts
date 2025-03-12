import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalStatus } from './goal-status.enum';
import { NestedEnumGoalStatusWithAggregatesFilter } from './nested-enum-goal-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGoalStatusFilter } from './nested-enum-goal-status-filter.input';

@InputType()
export class EnumGoalStatusWithAggregatesFilter {

    @Field(() => GoalStatus, {nullable:true})
    equals?: `${GoalStatus}`;

    @Field(() => [GoalStatus], {nullable:true})
    in?: Array<`${GoalStatus}`>;

    @Field(() => [GoalStatus], {nullable:true})
    notIn?: Array<`${GoalStatus}`>;

    @Field(() => NestedEnumGoalStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGoalStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGoalStatusFilter, {nullable:true})
    _min?: NestedEnumGoalStatusFilter;

    @Field(() => NestedEnumGoalStatusFilter, {nullable:true})
    _max?: NestedEnumGoalStatusFilter;
}
