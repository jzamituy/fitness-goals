import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodCreateWithoutGymMemberInput } from './mood-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { MoodCreateOrConnectWithoutGymMemberInput } from './mood-create-or-connect-without-gym-member.input';
import { MoodCreateManyGymMemberInputEnvelope } from './mood-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoodWhereUniqueInput } from './mood-where-unique.input';

@InputType()
export class MoodUncheckedCreateNestedManyWithoutGymMemberInput {

    @Field(() => [MoodCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => MoodCreateWithoutGymMemberInput)
    create?: Array<MoodCreateWithoutGymMemberInput>;

    @Field(() => [MoodCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => MoodCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<MoodCreateOrConnectWithoutGymMemberInput>;

    @Field(() => MoodCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => MoodCreateManyGymMemberInputEnvelope)
    createMany?: MoodCreateManyGymMemberInputEnvelope;

    @Field(() => [MoodWhereUniqueInput], {nullable:true})
    @Type(() => MoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoodWhereUniqueInput, 'id'>>;
}
