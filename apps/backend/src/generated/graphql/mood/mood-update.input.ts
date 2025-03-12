import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMoodLevelFieldUpdateOperationsInput } from '../prisma/enum-mood-level-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GymMemberUpdateOneRequiredWithoutMoodsNestedInput } from '../gym-member/gym-member-update-one-required-without-moods-nested.input';

@InputType()
export class MoodUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumMoodLevelFieldUpdateOperationsInput, {nullable:true})
    level?: EnumMoodLevelFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => GymMemberUpdateOneRequiredWithoutMoodsNestedInput, {nullable:true})
    gymMember?: GymMemberUpdateOneRequiredWithoutMoodsNestedInput;
}
