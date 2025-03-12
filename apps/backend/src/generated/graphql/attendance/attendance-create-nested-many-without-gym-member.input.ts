import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceCreateWithoutGymMemberInput } from './attendance-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { AttendanceCreateOrConnectWithoutGymMemberInput } from './attendance-create-or-connect-without-gym-member.input';
import { AttendanceCreateManyGymMemberInputEnvelope } from './attendance-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';

@InputType()
export class AttendanceCreateNestedManyWithoutGymMemberInput {

    @Field(() => [AttendanceCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => AttendanceCreateWithoutGymMemberInput)
    create?: Array<AttendanceCreateWithoutGymMemberInput>;

    @Field(() => [AttendanceCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => AttendanceCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<AttendanceCreateOrConnectWithoutGymMemberInput>;

    @Field(() => AttendanceCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => AttendanceCreateManyGymMemberInputEnvelope)
    createMany?: AttendanceCreateManyGymMemberInputEnvelope;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    @Type(() => AttendanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>>;
}
