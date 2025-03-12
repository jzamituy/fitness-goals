import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Goal } from '../goal/goal.model';
import { Attendance } from '../attendance/attendance.model';
import { Mood } from '../mood/mood.model';
import { Alert } from '../alert/alert.model';
import { MemberPlan } from '../member-plan/member-plan.model';
import { Coach } from '../coach/coach.model';
import { Nutritionist } from '../nutritionist/nutritionist.model';
import { GymMemberCount } from './gym-member-count.output';

@ObjectType()
export class GymMember {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    membershipId!: string | null;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => String, {nullable:true})
    coachId!: string | null;

    @Field(() => String, {nullable:true})
    nutritionistId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Goal], {nullable:true})
    goals?: Array<Goal>;

    @Field(() => [Attendance], {nullable:true})
    attendances?: Array<Attendance>;

    @Field(() => [Mood], {nullable:true})
    moods?: Array<Mood>;

    @Field(() => [Alert], {nullable:true})
    alerts?: Array<Alert>;

    @Field(() => [MemberPlan], {nullable:true})
    memberPlans?: Array<MemberPlan>;

    @Field(() => Coach, {nullable:true})
    coach?: Coach | null;

    @Field(() => Nutritionist, {nullable:true})
    nutritionist?: Nutritionist | null;

    @Field(() => GymMemberCount, {nullable:false})
    _count?: GymMemberCount;
}
