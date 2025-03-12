import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationStatus } from './notification-status.enum';
import { NestedEnumNotificationStatusWithAggregatesFilter } from './nested-enum-notification-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNotificationStatusFilter } from './nested-enum-notification-status-filter.input';

@InputType()
export class EnumNotificationStatusWithAggregatesFilter {

    @Field(() => NotificationStatus, {nullable:true})
    equals?: `${NotificationStatus}`;

    @Field(() => [NotificationStatus], {nullable:true})
    in?: Array<`${NotificationStatus}`>;

    @Field(() => [NotificationStatus], {nullable:true})
    notIn?: Array<`${NotificationStatus}`>;

    @Field(() => NestedEnumNotificationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNotificationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNotificationStatusFilter, {nullable:true})
    _min?: NestedEnumNotificationStatusFilter;

    @Field(() => NestedEnumNotificationStatusFilter, {nullable:true})
    _max?: NestedEnumNotificationStatusFilter;
}
