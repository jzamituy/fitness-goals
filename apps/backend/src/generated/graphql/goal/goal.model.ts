import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GoalStatus } from '../prisma/goal-status.enum';
import { GymMember } from '../gym-member/gym-member.model';

@ObjectType()
export class Goal {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => GoalStatus, {nullable:false})
    status!: `${GoalStatus}`;

    @Field(() => String, {nullable:false})
    diet!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GymMember, {nullable:false})
    gymMember?: GymMember;
}
