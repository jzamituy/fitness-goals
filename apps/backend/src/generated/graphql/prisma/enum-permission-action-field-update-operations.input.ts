import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionAction } from './permission-action.enum';

@InputType()
export class EnumPermissionActionFieldUpdateOperationsInput {

    @Field(() => PermissionAction, {nullable:true})
    set?: `${PermissionAction}`;
}
