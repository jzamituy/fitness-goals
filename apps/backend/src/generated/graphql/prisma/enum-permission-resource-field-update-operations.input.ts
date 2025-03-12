import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResource } from './permission-resource.enum';

@InputType()
export class EnumPermissionResourceFieldUpdateOperationsInput {

    @Field(() => PermissionResource, {nullable:true})
    set?: `${PermissionResource}`;
}
