import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceWhereInput } from './attendance-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAttendanceArgs {

    @Field(() => AttendanceWhereInput, {nullable:true})
    @Type(() => AttendanceWhereInput)
    where?: AttendanceWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
