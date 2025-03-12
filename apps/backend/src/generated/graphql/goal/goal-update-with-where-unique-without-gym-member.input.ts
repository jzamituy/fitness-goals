import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { Type } from 'class-transformer';
import { GoalUpdateWithoutGymMemberInput } from './goal-update-without-gym-member.input';

@InputType()
export class GoalUpdateWithWhereUniqueWithoutGymMemberInput {

    @Field(() => GoalWhereUniqueInput, {nullable:false})
    @Type(() => GoalWhereUniqueInput)
    where!: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;

    @Field(() => GoalUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => GoalUpdateWithoutGymMemberInput)
    data!: GoalUpdateWithoutGymMemberInput;
}
