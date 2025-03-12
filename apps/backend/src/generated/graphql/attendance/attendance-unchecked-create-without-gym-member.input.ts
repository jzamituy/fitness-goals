import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceStatus } from '../prisma/attendance-status.enum';

@InputType()
export class AttendanceUncheckedCreateWithoutGymMemberInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => AttendanceStatus, {nullable:false})
    status!: `${AttendanceStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
