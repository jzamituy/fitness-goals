import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalUpdateManyMutationInput } from './goal-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GoalWhereInput } from './goal-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyGoalArgs {

    @Field(() => GoalUpdateManyMutationInput, {nullable:false})
    @Type(() => GoalUpdateManyMutationInput)
    data!: GoalUpdateManyMutationInput;

    @Field(() => GoalWhereInput, {nullable:true})
    @Type(() => GoalWhereInput)
    where?: GoalWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
