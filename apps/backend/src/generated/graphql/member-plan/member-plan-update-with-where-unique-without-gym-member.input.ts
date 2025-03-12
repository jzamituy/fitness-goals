import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MemberPlanUpdateWithoutGymMemberInput } from './member-plan-update-without-gym-member.input';

@InputType()
export class MemberPlanUpdateWithWhereUniqueWithoutGymMemberInput {

    @Field(() => MemberPlanWhereUniqueInput, {nullable:false})
    @Type(() => MemberPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;

    @Field(() => MemberPlanUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => MemberPlanUpdateWithoutGymMemberInput)
    data!: MemberPlanUpdateWithoutGymMemberInput;
}
