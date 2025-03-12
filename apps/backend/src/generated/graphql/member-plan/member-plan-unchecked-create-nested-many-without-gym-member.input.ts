import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanCreateWithoutGymMemberInput } from './member-plan-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { MemberPlanCreateOrConnectWithoutGymMemberInput } from './member-plan-create-or-connect-without-gym-member.input';
import { MemberPlanCreateManyGymMemberInputEnvelope } from './member-plan-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';

@InputType()
export class MemberPlanUncheckedCreateNestedManyWithoutGymMemberInput {

    @Field(() => [MemberPlanCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => MemberPlanCreateWithoutGymMemberInput)
    create?: Array<MemberPlanCreateWithoutGymMemberInput>;

    @Field(() => [MemberPlanCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => MemberPlanCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<MemberPlanCreateOrConnectWithoutGymMemberInput>;

    @Field(() => MemberPlanCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => MemberPlanCreateManyGymMemberInputEnvelope)
    createMany?: MemberPlanCreateManyGymMemberInputEnvelope;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;
}
