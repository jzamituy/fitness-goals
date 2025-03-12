import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodCreateWithoutGymMemberInput } from './mood-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { MoodCreateOrConnectWithoutGymMemberInput } from './mood-create-or-connect-without-gym-member.input';
import { MoodUpsertWithWhereUniqueWithoutGymMemberInput } from './mood-upsert-with-where-unique-without-gym-member.input';
import { MoodCreateManyGymMemberInputEnvelope } from './mood-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoodWhereUniqueInput } from './mood-where-unique.input';
import { MoodUpdateWithWhereUniqueWithoutGymMemberInput } from './mood-update-with-where-unique-without-gym-member.input';
import { MoodUpdateManyWithWhereWithoutGymMemberInput } from './mood-update-many-with-where-without-gym-member.input';
import { MoodScalarWhereInput } from './mood-scalar-where.input';

@InputType()
export class MoodUpdateManyWithoutGymMemberNestedInput {

    @Field(() => [MoodCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => MoodCreateWithoutGymMemberInput)
    create?: Array<MoodCreateWithoutGymMemberInput>;

    @Field(() => [MoodCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => MoodCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<MoodCreateOrConnectWithoutGymMemberInput>;

    @Field(() => [MoodUpsertWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => MoodUpsertWithWhereUniqueWithoutGymMemberInput)
    upsert?: Array<MoodUpsertWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => MoodCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => MoodCreateManyGymMemberInputEnvelope)
    createMany?: MoodCreateManyGymMemberInputEnvelope;

    @Field(() => [MoodWhereUniqueInput], {nullable:true})
    @Type(() => MoodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MoodWhereUniqueInput, 'id'>>;

    @Field(() => [MoodWhereUniqueInput], {nullable:true})
    @Type(() => MoodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MoodWhereUniqueInput, 'id'>>;

    @Field(() => [MoodWhereUniqueInput], {nullable:true})
    @Type(() => MoodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MoodWhereUniqueInput, 'id'>>;

    @Field(() => [MoodWhereUniqueInput], {nullable:true})
    @Type(() => MoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoodWhereUniqueInput, 'id'>>;

    @Field(() => [MoodUpdateWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => MoodUpdateWithWhereUniqueWithoutGymMemberInput)
    update?: Array<MoodUpdateWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => [MoodUpdateManyWithWhereWithoutGymMemberInput], {nullable:true})
    @Type(() => MoodUpdateManyWithWhereWithoutGymMemberInput)
    updateMany?: Array<MoodUpdateManyWithWhereWithoutGymMemberInput>;

    @Field(() => [MoodScalarWhereInput], {nullable:true})
    @Type(() => MoodScalarWhereInput)
    deleteMany?: Array<MoodScalarWhereInput>;
}
