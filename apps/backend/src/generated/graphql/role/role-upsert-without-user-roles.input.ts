import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutUserRolesInput } from './role-update-without-user-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutUserRolesInput } from './role-create-without-user-roles.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutUserRolesInput {

    @Field(() => RoleUpdateWithoutUserRolesInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUserRolesInput)
    update!: RoleUpdateWithoutUserRolesInput;

    @Field(() => RoleCreateWithoutUserRolesInput, {nullable:false})
    @Type(() => RoleCreateWithoutUserRolesInput)
    create!: RoleCreateWithoutUserRolesInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
