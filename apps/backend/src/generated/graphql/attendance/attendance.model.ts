import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AttendanceStatus } from '../prisma/attendance-status.enum';
import { GymMember } from '../gym-member/gym-member.model';

@ObjectType()
export class Attendance {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => AttendanceStatus, {nullable:false})
    status!: `${AttendanceStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GymMember, {nullable:false})
    gymMember?: GymMember;
}
