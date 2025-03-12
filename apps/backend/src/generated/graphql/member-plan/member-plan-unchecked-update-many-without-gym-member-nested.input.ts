import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanCreateWithoutGymMemberInput } from './member-plan-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { MemberPlanCreateOrConnectWithoutGymMemberInput } from './member-plan-create-or-connect-without-gym-member.input';
import { MemberPlanUpsertWithWhereUniqueWithoutGymMemberInput } from './member-plan-upsert-with-where-unique-without-gym-member.input';
import { MemberPlanCreateManyGymMemberInputEnvelope } from './member-plan-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { MemberPlanUpdateWithWhereUniqueWithoutGymMemberInput } from './member-plan-update-with-where-unique-without-gym-member.input';
import { MemberPlanUpdateManyWithWhereWithoutGymMemberInput } from './member-plan-update-many-with-where-without-gym-member.input';
import { MemberPlanScalarWhereInput } from './member-plan-scalar-where.input';

@InputType()
export class MemberPlanUncheckedUpdateManyWithoutGymMemberNestedInput {

    @Field(() => [MemberPlanCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => MemberPlanCreateWithoutGymMemberInput)
    create?: Array<MemberPlanCreateWithoutGymMemberInput>;

    @Field(() => [MemberPlanCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => MemberPlanCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<MemberPlanCreateOrConnectWithoutGymMemberInput>;

    @Field(() => [MemberPlanUpsertWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => MemberPlanUpsertWithWhereUniqueWithoutGymMemberInput)
    upsert?: Array<MemberPlanUpsertWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => MemberPlanCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => MemberPlanCreateManyGymMemberInputEnvelope)
    createMany?: MemberPlanCreateManyGymMemberInputEnvelope;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanUpdateWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => MemberPlanUpdateWithWhereUniqueWithoutGymMemberInput)
    update?: Array<MemberPlanUpdateWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => [MemberPlanUpdateManyWithWhereWithoutGymMemberInput], {nullable:true})
    @Type(() => MemberPlanUpdateManyWithWhereWithoutGymMemberInput)
    updateMany?: Array<MemberPlanUpdateManyWithWhereWithoutGymMemberInput>;

    @Field(() => [MemberPlanScalarWhereInput], {nullable:true})
    @Type(() => MemberPlanScalarWhereInput)
    deleteMany?: Array<MemberPlanScalarWhereInput>;
}
