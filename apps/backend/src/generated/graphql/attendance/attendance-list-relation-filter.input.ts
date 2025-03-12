import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceWhereInput } from './attendance-where.input';

@InputType()
export class AttendanceListRelationFilter {

    @Field(() => AttendanceWhereInput, {nullable:true})
    every?: AttendanceWhereInput;

    @Field(() => AttendanceWhereInput, {nullable:true})
    some?: AttendanceWhereInput;

    @Field(() => AttendanceWhereInput, {nullable:true})
    none?: AttendanceWhereInput;
}
