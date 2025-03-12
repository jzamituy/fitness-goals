import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutGymMemberNestedInput } from '../user/user-update-one-required-without-gym-member-nested.input';
import { AttendanceUpdateManyWithoutGymMemberNestedInput } from '../attendance/attendance-update-many-without-gym-member-nested.input';
import { MoodUpdateManyWithoutGymMemberNestedInput } from '../mood/mood-update-many-without-gym-member-nested.input';
import { AlertUpdateManyWithoutGymMemberNestedInput } from '../alert/alert-update-many-without-gym-member-nested.input';
import { MemberPlanUpdateManyWithoutGymMemberNestedInput } from '../member-plan/member-plan-update-many-without-gym-member-nested.input';
import { CoachUpdateOneWithoutGymMembersNestedInput } from '../coach/coach-update-one-without-gym-members-nested.input';
import { NutritionistUpdateOneWithoutGymMembersNestedInput } from '../nutritionist/nutritionist-update-one-without-gym-members-nested.input';

@InputType()
export class GymMemberUpdateWithoutGoalsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    membershipId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutGymMemberNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutGymMemberNestedInput;

    @Field(() => AttendanceUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    attendances?: AttendanceUpdateManyWithoutGymMemberNestedInput;

    @Field(() => MoodUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    moods?: MoodUpdateManyWithoutGymMemberNestedInput;

    @Field(() => AlertUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    alerts?: AlertUpdateManyWithoutGymMemberNestedInput;

    @Field(() => MemberPlanUpdateManyWithoutGymMemberNestedInput, {nullable:true})
    memberPlans?: MemberPlanUpdateManyWithoutGymMemberNestedInput;

    @Field(() => CoachUpdateOneWithoutGymMembersNestedInput, {nullable:true})
    coach?: CoachUpdateOneWithoutGymMembersNestedInput;

    @Field(() => NutritionistUpdateOneWithoutGymMembersNestedInput, {nullable:true})
    nutritionist?: NutritionistUpdateOneWithoutGymMembersNestedInput;
}
