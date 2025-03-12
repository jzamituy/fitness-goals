import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalUpdateInput } from './goal-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';

@ArgsType()
export class UpdateOneGoalArgs {

    @Field(() => GoalUpdateInput, {nullable:false})
    @Type(() => GoalUpdateInput)
    data!: GoalUpdateInput;

    @Field(() => GoalWhereUniqueInput, {nullable:false})
    @Type(() => GoalWhereUniqueInput)
    where!: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;
}
