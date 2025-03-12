import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MemberPlanCreateWithoutGymMemberInput } from './member-plan-create-without-gym-member.input';

@InputType()
export class MemberPlanCreateOrConnectWithoutGymMemberInput {

    @Field(() => MemberPlanWhereUniqueInput, {nullable:false})
    @Type(() => MemberPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;

    @Field(() => MemberPlanCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => MemberPlanCreateWithoutGymMemberInput)
    create!: MemberPlanCreateWithoutGymMemberInput;
}
