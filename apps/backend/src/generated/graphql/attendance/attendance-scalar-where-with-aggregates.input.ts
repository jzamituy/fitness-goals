import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumAttendanceStatusWithAggregatesFilter } from '../prisma/enum-attendance-status-with-aggregates-filter.input';

@InputType()
export class AttendanceScalarWhereWithAggregatesInput {

    @Field(() => [AttendanceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AttendanceScalarWhereWithAggregatesInput>;

    @Field(() => [AttendanceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AttendanceScalarWhereWithAggregatesInput>;

    @Field(() => [AttendanceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AttendanceScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    gymMemberId?: UuidWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => EnumAttendanceStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAttendanceStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
