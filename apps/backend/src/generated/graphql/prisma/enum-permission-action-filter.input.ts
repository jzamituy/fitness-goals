import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionAction } from './permission-action.enum';
import { NestedEnumPermissionActionFilter } from './nested-enum-permission-action-filter.input';

@InputType()
export class EnumPermissionActionFilter {

    @Field(() => PermissionAction, {nullable:true})
    equals?: `${PermissionAction}`;

    @Field(() => [PermissionAction], {nullable:true})
    in?: Array<`${PermissionAction}`>;

    @Field(() => [PermissionAction], {nullable:true})
    notIn?: Array<`${PermissionAction}`>;

    @Field(() => NestedEnumPermissionActionFilter, {nullable:true})
    not?: NestedEnumPermissionActionFilter;
}
