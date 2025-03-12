import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { Type } from 'class-transformer';
import { GoalCreateWithoutGymMemberInput } from './goal-create-without-gym-member.input';

@InputType()
export class GoalCreateOrConnectWithoutGymMemberInput {

    @Field(() => GoalWhereUniqueInput, {nullable:false})
    @Type(() => GoalWhereUniqueInput)
    where!: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;

    @Field(() => GoalCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => GoalCreateWithoutGymMemberInput)
    create!: GoalCreateWithoutGymMemberInput;
}
