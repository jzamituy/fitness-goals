import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResource } from './permission-resource.enum';
import { NestedEnumPermissionResourceFilter } from './nested-enum-permission-resource-filter.input';

@InputType()
export class EnumPermissionResourceFilter {

    @Field(() => PermissionResource, {nullable:true})
    equals?: `${PermissionResource}`;

    @Field(() => [PermissionResource], {nullable:true})
    in?: Array<`${PermissionResource}`>;

    @Field(() => [PermissionResource], {nullable:true})
    notIn?: Array<`${PermissionResource}`>;

    @Field(() => NestedEnumPermissionResourceFilter, {nullable:true})
    not?: NestedEnumPermissionResourceFilter;
}
