import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertStatus } from './alert-status.enum';

@InputType()
export class EnumAlertStatusFieldUpdateOperationsInput {

    @Field(() => AlertStatus, {nullable:true})
    set?: `${AlertStatus}`;
}
