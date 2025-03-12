import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceCreateManyInput } from './attendance-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAttendanceArgs {

    @Field(() => [AttendanceCreateManyInput], {nullable:false})
    @Type(() => AttendanceCreateManyInput)
    data!: Array<AttendanceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
