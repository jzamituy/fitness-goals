import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanStatus } from './plan-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPlanStatusFilter } from './nested-enum-plan-status-filter.input';

@InputType()
export class NestedEnumPlanStatusWithAggregatesFilter {

    @Field(() => PlanStatus, {nullable:true})
    equals?: `${PlanStatus}`;

    @Field(() => [PlanStatus], {nullable:true})
    in?: Array<`${PlanStatus}`>;

    @Field(() => [PlanStatus], {nullable:true})
    notIn?: Array<`${PlanStatus}`>;

    @Field(() => NestedEnumPlanStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPlanStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPlanStatusFilter, {nullable:true})
    _min?: NestedEnumPlanStatusFilter;

    @Field(() => NestedEnumPlanStatusFilter, {nullable:true})
    _max?: NestedEnumPlanStatusFilter;
}
