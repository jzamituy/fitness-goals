import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGymMemberInput } from '../user/user-create-nested-one-without-gym-member.input';
import { GoalCreateNestedManyWithoutGymMemberInput } from '../goal/goal-create-nested-many-without-gym-member.input';
import { MoodCreateNestedManyWithoutGymMemberInput } from '../mood/mood-create-nested-many-without-gym-member.input';
import { AlertCreateNestedManyWithoutGymMemberInput } from '../alert/alert-create-nested-many-without-gym-member.input';
import { MemberPlanCreateNestedManyWithoutGymMemberInput } from '../member-plan/member-plan-create-nested-many-without-gym-member.input';
import { CoachCreateNestedOneWithoutGymMembersInput } from '../coach/coach-create-nested-one-without-gym-members.input';
import { NutritionistCreateNestedOneWithoutGymMembersInput } from '../nutritionist/nutritionist-create-nested-one-without-gym-members.input';

@InputType()
export class GymMemberCreateWithoutAttendancesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    membershipId?: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutGymMemberInput, {nullable:false})
    user!: UserCreateNestedOneWithoutGymMemberInput;

    @Field(() => GoalCreateNestedManyWithoutGymMemberInput, {nullable:true})
    goals?: GoalCreateNestedManyWithoutGymMemberInput;

    @Field(() => MoodCreateNestedManyWithoutGymMemberInput, {nullable:true})
    moods?: MoodCreateNestedManyWithoutGymMemberInput;

    @Field(() => AlertCreateNestedManyWithoutGymMemberInput, {nullable:true})
    alerts?: AlertCreateNestedManyWithoutGymMemberInput;

    @Field(() => MemberPlanCreateNestedManyWithoutGymMemberInput, {nullable:true})
    memberPlans?: MemberPlanCreateNestedManyWithoutGymMemberInput;

    @Field(() => CoachCreateNestedOneWithoutGymMembersInput, {nullable:true})
    coach?: CoachCreateNestedOneWithoutGymMembersInput;

    @Field(() => NutritionistCreateNestedOneWithoutGymMembersInput, {nullable:true})
    nutritionist?: NutritionistCreateNestedOneWithoutGymMembersInput;
}
