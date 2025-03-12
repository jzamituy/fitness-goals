import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionAction } from '../prisma/permission-action.enum';
import { PermissionResource } from '../prisma/permission-resource.enum';

@InputType()
export class PermissionCreateWithoutRolePermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PermissionAction, {nullable:false})
    action!: `${PermissionAction}`;

    @Field(() => PermissionResource, {nullable:false})
    resource!: `${PermissionResource}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
