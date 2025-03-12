import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AttendanceStatus } from '../prisma/attendance-status.enum';

@ObjectType()
export class AttendanceMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    gymMemberId?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => AttendanceStatus, {nullable:true})
    status?: `${AttendanceStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
