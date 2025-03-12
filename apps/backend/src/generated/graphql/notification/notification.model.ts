import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { NotificationStatus } from '../prisma/notification-status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Notification {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => NotificationType, {nullable:false})
    type!: `${NotificationType}`;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => NotificationStatus, {nullable:false})
    status!: `${NotificationStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
