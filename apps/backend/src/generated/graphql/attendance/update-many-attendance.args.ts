import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceUpdateManyMutationInput } from './attendance-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AttendanceWhereInput } from './attendance-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAttendanceArgs {

    @Field(() => AttendanceUpdateManyMutationInput, {nullable:false})
    @Type(() => AttendanceUpdateManyMutationInput)
    data!: AttendanceUpdateManyMutationInput;

    @Field(() => AttendanceWhereInput, {nullable:true})
    @Type(() => AttendanceWhereInput)
    where?: AttendanceWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
