import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceStatus } from '../prisma/attendance-status.enum';

@InputType()
export class AttendanceUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => AttendanceStatus, {nullable:false})
    status!: `${AttendanceStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
