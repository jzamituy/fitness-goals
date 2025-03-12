import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanStatus } from './plan-status.enum';

@InputType()
export class EnumPlanStatusFieldUpdateOperationsInput {

    @Field(() => PlanStatus, {nullable:true})
    set?: `${PlanStatus}`;
}
