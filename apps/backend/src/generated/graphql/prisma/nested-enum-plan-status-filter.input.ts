import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanStatus } from './plan-status.enum';

@InputType()
export class NestedEnumPlanStatusFilter {

    @Field(() => PlanStatus, {nullable:true})
    equals?: `${PlanStatus}`;

    @Field(() => [PlanStatus], {nullable:true})
    in?: Array<`${PlanStatus}`>;

    @Field(() => [PlanStatus], {nullable:true})
    notIn?: Array<`${PlanStatus}`>;

    @Field(() => NestedEnumPlanStatusFilter, {nullable:true})
    not?: NestedEnumPlanStatusFilter;
}
