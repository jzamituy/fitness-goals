import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceCreateInput } from './attendance-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAttendanceArgs {

    @Field(() => AttendanceCreateInput, {nullable:false})
    @Type(() => AttendanceCreateInput)
    data!: AttendanceCreateInput;
}
