import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanLevel } from './plan-level.enum';

@InputType()
export class NestedEnumPlanLevelFilter {

    @Field(() => PlanLevel, {nullable:true})
    equals?: `${PlanLevel}`;

    @Field(() => [PlanLevel], {nullable:true})
    in?: Array<`${PlanLevel}`>;

    @Field(() => [PlanLevel], {nullable:true})
    notIn?: Array<`${PlanLevel}`>;

    @Field(() => NestedEnumPlanLevelFilter, {nullable:true})
    not?: NestedEnumPlanLevelFilter;
}
