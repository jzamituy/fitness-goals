import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanLevel } from './plan-level.enum';

@InputType()
export class EnumPlanLevelFieldUpdateOperationsInput {

    @Field(() => PlanLevel, {nullable:true})
    set?: `${PlanLevel}`;
}
