import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResource } from './permission-resource.enum';

@InputType()
export class NestedEnumPermissionResourceFilter {

    @Field(() => PermissionResource, {nullable:true})
    equals?: `${PermissionResource}`;

    @Field(() => [PermissionResource], {nullable:true})
    in?: Array<`${PermissionResource}`>;

    @Field(() => [PermissionResource], {nullable:true})
    notIn?: Array<`${PermissionResource}`>;

    @Field(() => NestedEnumPermissionResourceFilter, {nullable:true})
    not?: NestedEnumPermissionResourceFilter;
}
