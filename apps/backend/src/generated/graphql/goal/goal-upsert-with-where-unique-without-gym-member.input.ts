import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { Type } from 'class-transformer';
import { GoalUpdateWithoutGymMemberInput } from './goal-update-without-gym-member.input';
import { GoalCreateWithoutGymMemberInput } from './goal-create-without-gym-member.input';

@InputType()
export class GoalUpsertWithWhereUniqueWithoutGymMemberInput {

    @Field(() => GoalWhereUniqueInput, {nullable:false})
    @Type(() => GoalWhereUniqueInput)
    where!: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;

    @Field(() => GoalUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => GoalUpdateWithoutGymMemberInput)
    update!: GoalUpdateWithoutGymMemberInput;

    @Field(() => GoalCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => GoalCreateWithoutGymMemberInput)
    create!: GoalCreateWithoutGymMemberInput;
}
