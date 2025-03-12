import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAttendanceStatusFilter } from '../prisma/enum-attendance-status-filter.input';

@InputType()
export class AttendanceScalarWhereInput {

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    AND?: Array<AttendanceScalarWhereInput>;

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    OR?: Array<AttendanceScalarWhereInput>;

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    NOT?: Array<AttendanceScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    gymMemberId?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => EnumAttendanceStatusFilter, {nullable:true})
    status?: EnumAttendanceStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
