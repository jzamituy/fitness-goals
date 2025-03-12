import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInput } from '../role/role-update-one-required-without-permissions-nested.input';
import { PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput } from '../permission/permission-update-one-required-without-role-permissions-nested.input';

@InputType()
export class RolePermissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput;

    @Field(() => PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput;
}
