import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertCreateWithoutGymMemberInput } from './alert-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { AlertCreateOrConnectWithoutGymMemberInput } from './alert-create-or-connect-without-gym-member.input';
import { AlertCreateManyGymMemberInputEnvelope } from './alert-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';

@InputType()
export class AlertUncheckedCreateNestedManyWithoutGymMemberInput {

    @Field(() => [AlertCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => AlertCreateWithoutGymMemberInput)
    create?: Array<AlertCreateWithoutGymMemberInput>;

    @Field(() => [AlertCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => AlertCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<AlertCreateOrConnectWithoutGymMemberInput>;

    @Field(() => AlertCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => AlertCreateManyGymMemberInputEnvelope)
    createMany?: AlertCreateManyGymMemberInputEnvelope;

    @Field(() => [AlertWhereUniqueInput], {nullable:true})
    @Type(() => AlertWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AlertWhereUniqueInput, 'id'>>;
}
