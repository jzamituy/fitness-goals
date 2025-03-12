import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { Type } from 'class-transformer';
import { AttendanceCreateInput } from './attendance-create.input';
import { AttendanceUpdateInput } from './attendance-update.input';

@ArgsType()
export class UpsertOneAttendanceArgs {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    @Type(() => AttendanceWhereUniqueInput)
    where!: Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>;

    @Field(() => AttendanceCreateInput, {nullable:false})
    @Type(() => AttendanceCreateInput)
    create!: AttendanceCreateInput;

    @Field(() => AttendanceUpdateInput, {nullable:false})
    @Type(() => AttendanceUpdateInput)
    update!: AttendanceUpdateInput;
}
