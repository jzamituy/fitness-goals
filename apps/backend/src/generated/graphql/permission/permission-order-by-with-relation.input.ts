import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RolePermissionOrderByRelationAggregateInput } from '../role-permission/role-permission-order-by-relation-aggregate.input';

@InputType()
export class PermissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    action?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    resource?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RolePermissionOrderByRelationAggregateInput, {nullable:true})
    rolePermissions?: RolePermissionOrderByRelationAggregateInput;
}
