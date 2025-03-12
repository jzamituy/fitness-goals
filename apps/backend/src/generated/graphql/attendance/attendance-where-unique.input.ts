import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceWhereInput } from './attendance-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAttendanceStatusFilter } from '../prisma/enum-attendance-status-filter.input';
import { GymMemberScalarRelationFilter } from '../gym-member/gym-member-scalar-relation-filter.input';

@InputType()
export class AttendanceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AttendanceWhereInput], {nullable:true})
    AND?: Array<AttendanceWhereInput>;

    @Field(() => [AttendanceWhereInput], {nullable:true})
    OR?: Array<AttendanceWhereInput>;

    @Field(() => [AttendanceWhereInput], {nullable:true})
    NOT?: Array<AttendanceWhereInput>;

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

    @Field(() => GymMemberScalarRelationFilter, {nullable:true})
    gymMember?: GymMemberScalarRelationFilter;
}
