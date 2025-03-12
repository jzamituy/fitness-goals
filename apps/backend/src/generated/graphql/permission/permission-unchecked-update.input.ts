import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumPermissionActionFieldUpdateOperationsInput } from '../prisma/enum-permission-action-field-update-operations.input';
import { EnumPermissionResourceFieldUpdateOperationsInput } from '../prisma/enum-permission-resource-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput } from '../role-permission/role-permission-unchecked-update-many-without-permission-nested.input';

@InputType()
export class PermissionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPermissionActionFieldUpdateOperationsInput, {nullable:true})
    action?: EnumPermissionActionFieldUpdateOperationsInput;

    @Field(() => EnumPermissionResourceFieldUpdateOperationsInput, {nullable:true})
    resource?: EnumPermissionResourceFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput, {nullable:true})
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput;
}
