import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { Type } from 'class-transformer';
import { GoalCreateInput } from './goal-create.input';
import { GoalUpdateInput } from './goal-update.input';

@ArgsType()
export class UpsertOneGoalArgs {

    @Field(() => GoalWhereUniqueInput, {nullable:false})
    @Type(() => GoalWhereUniqueInput)
    where!: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;

    @Field(() => GoalCreateInput, {nullable:false})
    @Type(() => GoalCreateInput)
    create!: GoalCreateInput;

    @Field(() => GoalUpdateInput, {nullable:false})
    @Type(() => GoalUpdateInput)
    update!: GoalUpdateInput;
}
