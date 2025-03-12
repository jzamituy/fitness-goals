import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationStatus } from './notification-status.enum';

@InputType()
export class EnumNotificationStatusFieldUpdateOperationsInput {

    @Field(() => NotificationStatus, {nullable:true})
    set?: `${NotificationStatus}`;
}
