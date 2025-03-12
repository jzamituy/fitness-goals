import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUserRolesNestedInput } from '../role/role-update-one-required-without-user-roles-nested.input';

@InputType()
export class UserRoleUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutUserRolesNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput;
}
