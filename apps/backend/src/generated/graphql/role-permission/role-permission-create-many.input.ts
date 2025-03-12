import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => String, {nullable:false})
    permissionId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
