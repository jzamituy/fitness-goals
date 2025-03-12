import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionAction } from './permission-action.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPermissionActionFilter } from './nested-enum-permission-action-filter.input';

@InputType()
export class NestedEnumPermissionActionWithAggregatesFilter {

    @Field(() => PermissionAction, {nullable:true})
    equals?: `${PermissionAction}`;

    @Field(() => [PermissionAction], {nullable:true})
    in?: Array<`${PermissionAction}`>;

    @Field(() => [PermissionAction], {nullable:true})
    notIn?: Array<`${PermissionAction}`>;

    @Field(() => NestedEnumPermissionActionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermissionActionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPermissionActionFilter, {nullable:true})
    _min?: NestedEnumPermissionActionFilter;

    @Field(() => NestedEnumPermissionActionFilter, {nullable:true})
    _max?: NestedEnumPermissionActionFilter;
}
