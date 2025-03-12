import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalUncheckedCreateNestedManyWithoutGymMemberInput } from '../goal/goal-unchecked-create-nested-many-without-gym-member.input';
import { AttendanceUncheckedCreateNestedManyWithoutGymMemberInput } from '../attendance/attendance-unchecked-create-nested-many-without-gym-member.input';
import { MoodUncheckedCreateNestedManyWithoutGymMemberInput } from '../mood/mood-unchecked-create-nested-many-without-gym-member.input';
import { AlertUncheckedCreateNestedManyWithoutGymMemberInput } from '../alert/alert-unchecked-create-nested-many-without-gym-member.input';
import { MemberPlanUncheckedCreateNestedManyWithoutGymMemberInput } from '../member-plan/member-plan-unchecked-create-nested-many-without-gym-member.input';

@InputType()
export class GymMemberUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    membershipId?: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    coachId?: string;

    @Field(() => String, {nullable:true})
    nutritionistId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GoalUncheckedCreateNestedManyWithoutGymMemberInput, {nullable:true})
    goals?: GoalUncheckedCreateNestedManyWithoutGymMemberInput;

    @Field(() => AttendanceUncheckedCreateNestedManyWithoutGymMemberInput, {nullable:true})
    attendances?: AttendanceUncheckedCreateNestedManyWithoutGymMemberInput;

    @Field(() => MoodUncheckedCreateNestedManyWithoutGymMemberInput, {nullable:true})
    moods?: MoodUncheckedCreateNestedManyWithoutGymMemberInput;

    @Field(() => AlertUncheckedCreateNestedManyWithoutGymMemberInput, {nullable:true})
    alerts?: AlertUncheckedCreateNestedManyWithoutGymMemberInput;

    @Field(() => MemberPlanUncheckedCreateNestedManyWithoutGymMemberInput, {nullable:true})
    memberPlans?: MemberPlanUncheckedCreateNestedManyWithoutGymMemberInput;
}
