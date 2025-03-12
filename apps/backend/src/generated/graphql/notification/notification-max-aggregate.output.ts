import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { NotificationStatus } from '../prisma/notification-status.enum';

@ObjectType()
export class NotificationMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => NotificationType, {nullable:true})
    type?: `${NotificationType}`;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => NotificationStatus, {nullable:true})
    status?: `${NotificationStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
