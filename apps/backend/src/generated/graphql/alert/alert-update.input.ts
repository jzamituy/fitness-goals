import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAlertTypeFieldUpdateOperationsInput } from '../prisma/enum-alert-type-field-update-operations.input';
import { EnumAlertStatusFieldUpdateOperationsInput } from '../prisma/enum-alert-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { GymMemberUpdateOneRequiredWithoutAlertsNestedInput } from '../gym-member/gym-member-update-one-required-without-alerts-nested.input';

@InputType()
export class AlertUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAlertTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAlertTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reason?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAlertStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAlertStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => GymMemberUpdateOneRequiredWithoutAlertsNestedInput, {nullable:true})
    gymMember?: GymMemberUpdateOneRequiredWithoutAlertsNestedInput;
}
