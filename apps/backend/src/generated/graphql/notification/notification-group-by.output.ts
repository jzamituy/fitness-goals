import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationType } from '../prisma/notification-type.enum';
import { NotificationStatus } from '../prisma/notification-status.enum';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

@ObjectType()
export class NotificationGroupBy {

    @Field(() => String, {nullable:false})
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
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => NotificationCountAggregate, {nullable:true})
    _count?: NotificationCountAggregate;

    @Field(() => NotificationMinAggregate, {nullable:true})
    _min?: NotificationMinAggregate;

    @Field(() => NotificationMaxAggregate, {nullable:true})
    _max?: NotificationMaxAggregate;
}
