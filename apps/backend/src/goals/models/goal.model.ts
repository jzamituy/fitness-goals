import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Goal as PrismaGoal } from '@prisma/client';
import { User } from '../../users/models/user.model';

export enum GoalStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  INACTIVE = 'INACTIVE',
  ARCHIVED = 'ARCHIVED',
}

registerEnumType(GoalStatus, {
  name: 'GoalStatus',
});

@ObjectType()
export class Goal implements Partial<PrismaGoal> {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field()
  type: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => GoalStatus)
  status: GoalStatus;

  @Field()
  diet: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
