import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceStatus } from './attendance-status.enum';
import { NestedEnumAttendanceStatusWithAggregatesFilter } from './nested-enum-attendance-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAttendanceStatusFilter } from './nested-enum-attendance-status-filter.input';

@InputType()
export class EnumAttendanceStatusWithAggregatesFilter {

    @Field(() => AttendanceStatus, {nullable:true})
    equals?: `${AttendanceStatus}`;

    @Field(() => [AttendanceStatus], {nullable:true})
    in?: Array<`${AttendanceStatus}`>;

    @Field(() => [AttendanceStatus], {nullable:true})
    notIn?: Array<`${AttendanceStatus}`>;

    @Field(() => NestedEnumAttendanceStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAttendanceStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAttendanceStatusFilter, {nullable:true})
    _min?: NestedEnumAttendanceStatusFilter;

    @Field(() => NestedEnumAttendanceStatusFilter, {nullable:true})
    _max?: NestedEnumAttendanceStatusFilter;
}
