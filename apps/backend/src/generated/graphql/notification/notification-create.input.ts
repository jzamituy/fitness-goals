import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { NotificationStatus } from '../prisma/notification-status.enum';
import { UserCreateNestedOneWithoutNotificationsInput } from '../user/user-create-nested-one-without-notifications.input';

@InputType()
export class NotificationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => NotificationType, {nullable:false})
    type!: `${NotificationType}`;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => NotificationStatus, {nullable:false})
    status!: `${NotificationStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutNotificationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNotificationsInput;
}
