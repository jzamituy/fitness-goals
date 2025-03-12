import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertStatus } from './alert-status.enum';
import { NestedEnumAlertStatusFilter } from './nested-enum-alert-status-filter.input';

@InputType()
export class EnumAlertStatusFilter {

    @Field(() => AlertStatus, {nullable:true})
    equals?: `${AlertStatus}`;

    @Field(() => [AlertStatus], {nullable:true})
    in?: Array<`${AlertStatus}`>;

    @Field(() => [AlertStatus], {nullable:true})
    notIn?: Array<`${AlertStatus}`>;

    @Field(() => NestedEnumAlertStatusFilter, {nullable:true})
    not?: NestedEnumAlertStatusFilter;
}
