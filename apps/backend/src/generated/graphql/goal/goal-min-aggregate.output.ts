import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GoalStatus } from '../prisma/goal-status.enum';

@ObjectType()
export class GoalMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    gymMemberId?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => GoalStatus, {nullable:true})
    status?: `${GoalStatus}`;

    @Field(() => String, {nullable:true})
    diet?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
