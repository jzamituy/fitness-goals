import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceStatus } from './attendance-status.enum';

@InputType()
export class EnumAttendanceStatusFieldUpdateOperationsInput {

    @Field(() => AttendanceStatus, {nullable:true})
    set?: `${AttendanceStatus}`;
}
