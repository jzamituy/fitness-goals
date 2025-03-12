import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AttendanceStatus } from '../prisma/attendance-status.enum';
import { AttendanceCountAggregate } from './attendance-count-aggregate.output';
import { AttendanceMinAggregate } from './attendance-min-aggregate.output';
import { AttendanceMaxAggregate } from './attendance-max-aggregate.output';

@ObjectType()
export class AttendanceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => AttendanceStatus, {nullable:false})
    status!: `${AttendanceStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AttendanceCountAggregate, {nullable:true})
    _count?: AttendanceCountAggregate;

    @Field(() => AttendanceMinAggregate, {nullable:true})
    _min?: AttendanceMinAggregate;

    @Field(() => AttendanceMaxAggregate, {nullable:true})
    _max?: AttendanceMaxAggregate;
}
