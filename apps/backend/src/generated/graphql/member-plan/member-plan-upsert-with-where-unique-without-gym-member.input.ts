import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MemberPlanUpdateWithoutGymMemberInput } from './member-plan-update-without-gym-member.input';
import { MemberPlanCreateWithoutGymMemberInput } from './member-plan-create-without-gym-member.input';

@InputType()
export class MemberPlanUpsertWithWhereUniqueWithoutGymMemberInput {

    @Field(() => MemberPlanWhereUniqueInput, {nullable:false})
    @Type(() => MemberPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;

    @Field(() => MemberPlanUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => MemberPlanUpdateWithoutGymMemberInput)
    update!: MemberPlanUpdateWithoutGymMemberInput;

    @Field(() => MemberPlanCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => MemberPlanCreateWithoutGymMemberInput)
    create!: MemberPlanCreateWithoutGymMemberInput;
}
