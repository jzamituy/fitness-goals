import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { EnumNotificationTypeWithAggregatesFilter } from '../prisma/enum-notification-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumNotificationStatusWithAggregatesFilter } from '../prisma/enum-notification-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class NotificationScalarWhereWithAggregatesInput {

    @Field(() => [NotificationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    userId?: UuidWithAggregatesFilter;

    @Field(() => EnumNotificationTypeWithAggregatesFilter, {nullable:true})
    type?: EnumNotificationTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => EnumNotificationStatusWithAggregatesFilter, {nullable:true})
    status?: EnumNotificationStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
