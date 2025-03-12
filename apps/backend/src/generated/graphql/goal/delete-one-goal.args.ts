import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGoalArgs {

    @Field(() => GoalWhereUniqueInput, {nullable:false})
    @Type(() => GoalWhereUniqueInput)
    where!: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;
}
