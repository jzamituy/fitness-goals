import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationType } from './notification-type.enum';
import { NestedEnumNotificationTypeWithAggregatesFilter } from './nested-enum-notification-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNotificationTypeFilter } from './nested-enum-notification-type-filter.input';

@InputType()
export class EnumNotificationTypeWithAggregatesFilter {

    @Field(() => NotificationType, {nullable:true})
    equals?: `${NotificationType}`;

    @Field(() => [NotificationType], {nullable:true})
    in?: Array<`${NotificationType}`>;

    @Field(() => [NotificationType], {nullable:true})
    notIn?: Array<`${NotificationType}`>;

    @Field(() => NestedEnumNotificationTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNotificationTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNotificationTypeFilter, {nullable:true})
    _min?: NestedEnumNotificationTypeFilter;

    @Field(() => NestedEnumNotificationTypeFilter, {nullable:true})
    _max?: NestedEnumNotificationTypeFilter;
}
