import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationType } from './notification-type.enum';

@InputType()
export class NestedEnumNotificationTypeFilter {

    @Field(() => NotificationType, {nullable:true})
    equals?: `${NotificationType}`;

    @Field(() => [NotificationType], {nullable:true})
    in?: Array<`${NotificationType}`>;

    @Field(() => [NotificationType], {nullable:true})
    notIn?: Array<`${NotificationType}`>;

    @Field(() => NestedEnumNotificationTypeFilter, {nullable:true})
    not?: NestedEnumNotificationTypeFilter;
}
