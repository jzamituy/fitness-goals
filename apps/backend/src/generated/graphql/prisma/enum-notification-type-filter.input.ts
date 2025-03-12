import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationType } from './notification-type.enum';
import { NestedEnumNotificationTypeFilter } from './nested-enum-notification-type-filter.input';

@InputType()
export class EnumNotificationTypeFilter {

    @Field(() => NotificationType, {nullable:true})
    equals?: `${NotificationType}`;

    @Field(() => [NotificationType], {nullable:true})
    in?: Array<`${NotificationType}`>;

    @Field(() => [NotificationType], {nullable:true})
    notIn?: Array<`${NotificationType}`>;

    @Field(() => NestedEnumNotificationTypeFilter, {nullable:true})
    not?: NestedEnumNotificationTypeFilter;
}
