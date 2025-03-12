import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumPlanStatusFieldUpdateOperationsInput } from '../prisma/enum-plan-status-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GymMemberUpdateOneRequiredWithoutMemberPlansNestedInput } from '../gym-member/gym-member-update-one-required-without-member-plans-nested.input';
import { PlanTemplateUpdateOneRequiredWithoutMemberPlansNestedInput } from '../plan-template/plan-template-update-one-required-without-member-plans-nested.input';

@InputType()
export class MemberPlanUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumPlanStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPlanStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => GymMemberUpdateOneRequiredWithoutMemberPlansNestedInput, {nullable:true})
    gymMember?: GymMemberUpdateOneRequiredWithoutMemberPlansNestedInput;

    @Field(() => PlanTemplateUpdateOneRequiredWithoutMemberPlansNestedInput, {nullable:true})
    planTemplate?: PlanTemplateUpdateOneRequiredWithoutMemberPlansNestedInput;
}
