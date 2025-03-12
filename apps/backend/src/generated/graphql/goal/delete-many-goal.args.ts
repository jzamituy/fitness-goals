import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalWhereInput } from './goal-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyGoalArgs {

    @Field(() => GoalWhereInput, {nullable:true})
    @Type(() => GoalWhereInput)
    where?: GoalWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
