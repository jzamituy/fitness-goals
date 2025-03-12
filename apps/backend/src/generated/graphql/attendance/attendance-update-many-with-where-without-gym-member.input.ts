import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceScalarWhereInput } from './attendance-scalar-where.input';
import { Type } from 'class-transformer';
import { AttendanceUpdateManyMutationInput } from './attendance-update-many-mutation.input';

@InputType()
export class AttendanceUpdateManyWithWhereWithoutGymMemberInput {

    @Field(() => AttendanceScalarWhereInput, {nullable:false})
    @Type(() => AttendanceScalarWhereInput)
    where!: AttendanceScalarWhereInput;

    @Field(() => AttendanceUpdateManyMutationInput, {nullable:false})
    @Type(() => AttendanceUpdateManyMutationInput)
    data!: AttendanceUpdateManyMutationInput;
}
