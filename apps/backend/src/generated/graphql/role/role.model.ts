import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserRole } from '../user-role/user-role.model';
import { RolePermission } from '../role-permission/role-permission.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserRole], {nullable:true})
    userRoles?: Array<UserRole>;

    @Field(() => [RolePermission], {nullable:true})
    permissions?: Array<RolePermission>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
