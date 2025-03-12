import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalCreateInput } from './goal-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGoalArgs {

    @Field(() => GoalCreateInput, {nullable:false})
    @Type(() => GoalCreateInput)
    data!: GoalCreateInput;
}
