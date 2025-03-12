import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalStatus } from './goal-status.enum';

@InputType()
export class EnumGoalStatusFieldUpdateOperationsInput {

    @Field(() => GoalStatus, {nullable:true})
    set?: `${GoalStatus}`;
}
