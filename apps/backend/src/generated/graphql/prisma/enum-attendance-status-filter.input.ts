import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceStatus } from './attendance-status.enum';
import { NestedEnumAttendanceStatusFilter } from './nested-enum-attendance-status-filter.input';

@InputType()
export class EnumAttendanceStatusFilter {

    @Field(() => AttendanceStatus, {nullable:true})
    equals?: `${AttendanceStatus}`;

    @Field(() => [AttendanceStatus], {nullable:true})
    in?: Array<`${AttendanceStatus}`>;

    @Field(() => [AttendanceStatus], {nullable:true})
    notIn?: Array<`${AttendanceStatus}`>;

    @Field(() => NestedEnumAttendanceStatusFilter, {nullable:true})
    not?: NestedEnumAttendanceStatusFilter;
}
