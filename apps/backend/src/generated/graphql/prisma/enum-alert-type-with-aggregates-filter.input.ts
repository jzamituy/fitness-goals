import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertType } from './alert-type.enum';
import { NestedEnumAlertTypeWithAggregatesFilter } from './nested-enum-alert-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAlertTypeFilter } from './nested-enum-alert-type-filter.input';

@InputType()
export class EnumAlertTypeWithAggregatesFilter {

    @Field(() => AlertType, {nullable:true})
    equals?: `${AlertType}`;

    @Field(() => [AlertType], {nullable:true})
    in?: Array<`${AlertType}`>;

    @Field(() => [AlertType], {nullable:true})
    notIn?: Array<`${AlertType}`>;

    @Field(() => NestedEnumAlertTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAlertTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAlertTypeFilter, {nullable:true})
    _min?: NestedEnumAlertTypeFilter;

    @Field(() => NestedEnumAlertTypeFilter, {nullable:true})
    _max?: NestedEnumAlertTypeFilter;
}
