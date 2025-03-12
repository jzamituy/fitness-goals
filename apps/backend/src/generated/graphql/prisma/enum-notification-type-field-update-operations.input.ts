import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationType } from './notification-type.enum';

@InputType()
export class EnumNotificationTypeFieldUpdateOperationsInput {

    @Field(() => NotificationType, {nullable:true})
    set?: `${NotificationType}`;
}
