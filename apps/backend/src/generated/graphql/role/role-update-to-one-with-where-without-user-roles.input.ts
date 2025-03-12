import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutUserRolesInput } from './role-update-without-user-roles.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutUserRolesInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutUserRolesInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUserRolesInput)
    data!: RoleUpdateWithoutUserRolesInput;
}
