import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GoalUncheckedUpdateManyWithoutGymMemberNestedInput } from '../goal/goal-unchecked-update-many-without-gym-member-nested.input';
import { AttendanceUncheckedUpdateManyWithoutGymMemberNestedInput } from '../attendance/attendance-unchecked-update-many-without-gym-member-nested.input';
import { MoodUncheckedUpdateManyWithoutGymMemberNestedInput } from '../mood/mood-unchecked-update-many-without-gym-member-nested.input';
import { AlertUncheckedUpdateManyWithoutGymMemberNestedInput } from '../alert/alert-unchecked-update-many-without-gym-member-nested.input';
import { MemberPlanUncheckedUpdateManyWithoutGymMemberNestedInput } from '../member-plan/member-plan-unchecked-update-many-without-gym-member-nested.input';

@InputType()
export class GymMemberUncheckedUpdateWithoutCoachInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    membershipId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nutritionistId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => GoalUncheckedUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    goals?: GoalUncheckedUpdateManyWithoutGymMemberNestedInput;

    @Field(() => AttendanceUncheckedUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    attendances?: AttendanceUncheckedUpdateManyWithoutGymMemberNestedInput;

    @Field(() => MoodUncheckedUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    moods?: MoodUncheckedUpdateManyWithoutGymMemberNestedInput;

    @Field(() => AlertUncheckedUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    alerts?: AlertUncheckedUpdateManyWithoutGymMemberNestedInput;

    @Field(() => MemberPlanUncheckedUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    memberPlans?: MemberPlanUncheckedUpdateManyWithoutGymMemberNestedInput;
}
