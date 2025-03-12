import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceCreateManyGymMemberInput } from './attendance-create-many-gym-member.input';
import { Type } from 'class-transformer';

@InputType()
export class AttendanceCreateManyGymMemberInputEnvelope {

    @Field(() => [AttendanceCreateManyGymMemberInput], {nullable:false})
    @Type(() => AttendanceCreateManyGymMemberInput)
    data!: Array<AttendanceCreateManyGymMemberInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
