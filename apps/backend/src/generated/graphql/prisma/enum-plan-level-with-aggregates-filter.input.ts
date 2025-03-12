import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanLevel } from './plan-level.enum';
import { NestedEnumPlanLevelWithAggregatesFilter } from './nested-enum-plan-level-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPlanLevelFilter } from './nested-enum-plan-level-filter.input';

@InputType()
export class EnumPlanLevelWithAggregatesFilter {

    @Field(() => PlanLevel, {nullable:true})
    equals?: `${PlanLevel}`;

    @Field(() => [PlanLevel], {nullable:true})
    in?: Array<`${PlanLevel}`>;

    @Field(() => [PlanLevel], {nullable:true})
    notIn?: Array<`${PlanLevel}`>;

    @Field(() => NestedEnumPlanLevelWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPlanLevelWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPlanLevelFilter, {nullable:true})
    _min?: NestedEnumPlanLevelFilter;

    @Field(() => NestedEnumPlanLevelFilter, {nullable:true})
    _max?: NestedEnumPlanLevelFilter;
}
