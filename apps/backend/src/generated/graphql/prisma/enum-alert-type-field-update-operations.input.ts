import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertType } from './alert-type.enum';

@InputType()
export class EnumAlertTypeFieldUpdateOperationsInput {

    @Field(() => AlertType, {nullable:true})
    set?: `${AlertType}`;
}
