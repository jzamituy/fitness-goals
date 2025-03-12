import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumNotificationTypeFilter } from '../prisma/enum-notification-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumNotificationStatusFilter } from '../prisma/enum-notification-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class NotificationScalarWhereInput {

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    AND?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    OR?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    userId?: UuidFilter;

    @Field(() => EnumNotificationTypeFilter, {nullable:true})
    type?: EnumNotificationTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => EnumNotificationStatusFilter, {nullable:true})
    status?: EnumNotificationStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
