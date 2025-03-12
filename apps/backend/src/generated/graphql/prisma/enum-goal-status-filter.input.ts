import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalStatus } from './goal-status.enum';
import { NestedEnumGoalStatusFilter } from './nested-enum-goal-status-filter.input';

@InputType()
export class EnumGoalStatusFilter {

    @Field(() => GoalStatus, {nullable:true})
    equals?: `${GoalStatus}`;

    @Field(() => [GoalStatus], {nullable:true})
    in?: Array<`${GoalStatus}`>;

    @Field(() => [GoalStatus], {nullable:true})
    notIn?: Array<`${GoalStatus}`>;

    @Field(() => NestedEnumGoalStatusFilter, {nullable:true})
    not?: NestedEnumGoalStatusFilter;
}
