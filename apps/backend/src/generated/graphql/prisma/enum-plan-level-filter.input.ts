import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanLevel } from './plan-level.enum';
import { NestedEnumPlanLevelFilter } from './nested-enum-plan-level-filter.input';

@InputType()
export class EnumPlanLevelFilter {

    @Field(() => PlanLevel, {nullable:true})
    equals?: `${PlanLevel}`;

    @Field(() => [PlanLevel], {nullable:true})
    in?: Array<`${PlanLevel}`>;

    @Field(() => [PlanLevel], {nullable:true})
    notIn?: Array<`${PlanLevel}`>;

    @Field(() => NestedEnumPlanLevelFilter, {nullable:true})
    not?: NestedEnumPlanLevelFilter;
}
