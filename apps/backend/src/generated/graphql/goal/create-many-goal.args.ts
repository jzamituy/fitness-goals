import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalCreateManyInput } from './goal-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGoalArgs {

    @Field(() => [GoalCreateManyInput], {nullable:false})
    @Type(() => GoalCreateManyInput)
    data!: Array<GoalCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
