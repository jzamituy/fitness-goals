import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUserRolesInput } from './role-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUserRolesInput } from './role-create-or-connect-without-user-roles.input';
import { RoleUpsertWithoutUserRolesInput } from './role-upsert-without-user-roles.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutUserRolesInput } from './role-update-to-one-with-where-without-user-roles.input';

@InputType()
export class RoleUpdateOneRequiredWithoutUserRolesNestedInput {

    @Field(() => RoleCreateWithoutUserRolesInput, {nullable:true})
    @Type(() => RoleCreateWithoutUserRolesInput)
    create?: RoleCreateWithoutUserRolesInput;

    @Field(() => RoleCreateOrConnectWithoutUserRolesInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUserRolesInput)
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput;

    @Field(() => RoleUpsertWithoutUserRolesInput, {nullable:true})
    @Type(() => RoleUpsertWithoutUserRolesInput)
    upsert?: RoleUpsertWithoutUserRolesInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutUserRolesInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutUserRolesInput)
    update?: RoleUpdateToOneWithWhereWithoutUserRolesInput;
}
