import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResource } from './permission-resource.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPermissionResourceFilter } from './nested-enum-permission-resource-filter.input';

@InputType()
export class NestedEnumPermissionResourceWithAggregatesFilter {

    @Field(() => PermissionResource, {nullable:true})
    equals?: `${PermissionResource}`;

    @Field(() => [PermissionResource], {nullable:true})
    in?: Array<`${PermissionResource}`>;

    @Field(() => [PermissionResource], {nullable:true})
    notIn?: Array<`${PermissionResource}`>;

    @Field(() => NestedEnumPermissionResourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermissionResourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPermissionResourceFilter, {nullable:true})
    _min?: NestedEnumPermissionResourceFilter;

    @Field(() => NestedEnumPermissionResourceFilter, {nullable:true})
    _max?: NestedEnumPermissionResourceFilter;
}
