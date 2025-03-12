import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceUpdateInput } from './attendance-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';

@ArgsType()
export class UpdateOneAttendanceArgs {

    @Field(() => AttendanceUpdateInput, {nullable:false})
    @Type(() => AttendanceUpdateInput)
    data!: AttendanceUpdateInput;

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    @Type(() => AttendanceWhereUniqueInput)
    where!: Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>;
}
