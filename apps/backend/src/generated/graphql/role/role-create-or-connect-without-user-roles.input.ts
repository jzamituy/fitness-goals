import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutUserRolesInput } from './role-create-without-user-roles.input';

@InputType()
export class RoleCreateOrConnectWithoutUserRolesInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleCreateWithoutUserRolesInput, {nullable:false})
    @Type(() => RoleCreateWithoutUserRolesInput)
    create!: RoleCreateWithoutUserRolesInput;
}
