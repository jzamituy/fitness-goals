import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceCreateWithoutGymMemberInput } from './attendance-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { AttendanceCreateOrConnectWithoutGymMemberInput } from './attendance-create-or-connect-without-gym-member.input';
import { AttendanceUpsertWithWhereUniqueWithoutGymMemberInput } from './attendance-upsert-with-where-unique-without-gym-member.input';
import { AttendanceCreateManyGymMemberInputEnvelope } from './attendance-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { AttendanceUpdateWithWhereUniqueWithoutGymMemberInput } from './attendance-update-with-where-unique-without-gym-member.input';
import { AttendanceUpdateManyWithWhereWithoutGymMemberInput } from './attendance-update-many-with-where-without-gym-member.input';
import { AttendanceScalarWhereInput } from './attendance-scalar-where.input';

@InputType()
export class AttendanceUncheckedUpdateManyWithoutGymMemberNestedInput {

    @Field(() => [AttendanceCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => AttendanceCreateWithoutGymMemberInput)
    create?: Array<AttendanceCreateWithoutGymMemberInput>;

    @Field(() => [AttendanceCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => AttendanceCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<AttendanceCreateOrConnectWithoutGymMemberInput>;

    @Field(() => [AttendanceUpsertWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => AttendanceUpsertWithWhereUniqueWithoutGymMemberInput)
    upsert?: Array<AttendanceUpsertWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => AttendanceCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => AttendanceCreateManyGymMemberInputEnvelope)
    createMany?: AttendanceCreateManyGymMemberInputEnvelope;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    @Type(() => AttendanceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>>;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    @Type(() => AttendanceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>>;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    @Type(() => AttendanceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>>;

    @Field(() => [AttendanceWhereUniqueInput], {nullable:true})
    @Type(() => AttendanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>>;

    @Field(() => [AttendanceUpdateWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => AttendanceUpdateWithWhereUniqueWithoutGymMemberInput)
    update?: Array<AttendanceUpdateWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => [AttendanceUpdateManyWithWhereWithoutGymMemberInput], {nullable:true})
    @Type(() => AttendanceUpdateManyWithWhereWithoutGymMemberInput)
    updateMany?: Array<AttendanceUpdateManyWithWhereWithoutGymMemberInput>;

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    @Type(() => AttendanceScalarWhereInput)
    deleteMany?: Array<AttendanceScalarWhereInput>;
}
