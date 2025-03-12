import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { Type } from 'class-transformer';
import { AttendanceCreateWithoutGymMemberInput } from './attendance-create-without-gym-member.input';

@InputType()
export class AttendanceCreateOrConnectWithoutGymMemberInput {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    @Type(() => AttendanceWhereUniqueInput)
    where!: Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>;

    @Field(() => AttendanceCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => AttendanceCreateWithoutGymMemberInput)
    create!: AttendanceCreateWithoutGymMemberInput;
}
