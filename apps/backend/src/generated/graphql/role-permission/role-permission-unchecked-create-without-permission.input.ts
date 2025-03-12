import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionUncheckedCreateWithoutPermissionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
