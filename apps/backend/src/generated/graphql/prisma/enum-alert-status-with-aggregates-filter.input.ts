import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertStatus } from './alert-status.enum';
import { NestedEnumAlertStatusWithAggregatesFilter } from './nested-enum-alert-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAlertStatusFilter } from './nested-enum-alert-status-filter.input';

@InputType()
export class EnumAlertStatusWithAggregatesFilter {

    @Field(() => AlertStatus, {nullable:true})
    equals?: `${AlertStatus}`;

    @Field(() => [AlertStatus], {nullable:true})
    in?: Array<`${AlertStatus}`>;

    @Field(() => [AlertStatus], {nullable:true})
    notIn?: Array<`${AlertStatus}`>;

    @Field(() => NestedEnumAlertStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAlertStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAlertStatusFilter, {nullable:true})
    _min?: NestedEnumAlertStatusFilter;

    @Field(() => NestedEnumAlertStatusFilter, {nullable:true})
    _max?: NestedEnumAlertStatusFilter;
}
