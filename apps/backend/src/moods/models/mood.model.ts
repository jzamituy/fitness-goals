import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Mood as PrismaMood } from '@prisma/client';
import { User } from '../../generated/graphql';

export enum MoodLevel {
  VERY_BAD = 'VERY_BAD',
  BAD = 'BAD',
  NEUTRAL = 'NEUTRAL',
  GOOD = 'GOOD',
  VERY_GOOD = 'VERY_GOOD',
}

registerEnumType(MoodLevel, {
  name: 'MoodLevel',
});

@ObjectType()
export class Mood implements Partial<PrismaMood> {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field()
  date: Date;

  @Field(() => MoodLevel)
  level: MoodLevel;

  @Field({ nullable: true })
  notes?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
