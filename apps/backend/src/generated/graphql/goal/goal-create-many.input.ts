import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalStatus } from '../prisma/goal-status.enum';

@InputType()
export class GoalCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => GoalStatus, {nullable:false})
    status!: `${GoalStatus}`;

    @Field(() => String, {nullable:false})
    diet!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
