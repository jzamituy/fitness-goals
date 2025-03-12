import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationStatus } from './notification-status.enum';
import { NestedEnumNotificationStatusFilter } from './nested-enum-notification-status-filter.input';

@InputType()
export class EnumNotificationStatusFilter {

    @Field(() => NotificationStatus, {nullable:true})
    equals?: `${NotificationStatus}`;

    @Field(() => [NotificationStatus], {nullable:true})
    in?: Array<`${NotificationStatus}`>;

    @Field(() => [NotificationStatus], {nullable:true})
    notIn?: Array<`${NotificationStatus}`>;

    @Field(() => NestedEnumNotificationStatusFilter, {nullable:true})
    not?: NestedEnumNotificationStatusFilter;
}
