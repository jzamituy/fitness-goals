import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { Type } from 'class-transformer';
import { AttendanceUpdateWithoutGymMemberInput } from './attendance-update-without-gym-member.input';

@InputType()
export class AttendanceUpdateWithWhereUniqueWithoutGymMemberInput {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    @Type(() => AttendanceWhereUniqueInput)
    where!: Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>;

    @Field(() => AttendanceUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => AttendanceUpdateWithoutGymMemberInput)
    data!: AttendanceUpdateWithoutGymMemberInput;
}
