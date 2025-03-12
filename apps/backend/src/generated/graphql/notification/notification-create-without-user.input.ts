import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { NotificationStatus } from '../prisma/notification-status.enum';

@InputType()
export class NotificationCreateWithoutUserInput {

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
}
