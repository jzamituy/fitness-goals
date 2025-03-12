import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionAction } from '../prisma/permission-action.enum';
import { PermissionResource } from '../prisma/permission-resource.enum';

@ObjectType()
export class PermissionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PermissionAction, {nullable:true})
    action?: `${PermissionAction}`;

    @Field(() => PermissionResource, {nullable:true})
    resource?: `${PermissionResource}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
