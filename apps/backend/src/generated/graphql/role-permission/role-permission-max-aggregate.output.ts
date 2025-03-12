import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RolePermissionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    roleId?: string;

    @Field(() => String, {nullable:true})
    permissionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
