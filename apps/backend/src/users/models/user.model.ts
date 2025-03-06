import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum UserType {
  COACH = 'COACH',
  NUTRITIONIST = 'NUTRITIONIST',
  GYM_MEMBER = 'GYM_MEMBER',
}

registerEnumType(UserType, {
  name: 'UserType',
});

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phone: string | null;

  @Field()
  dateOfBirth: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  isActive: boolean;

  @Field()
  isArchived: boolean;

  @Field(() => UserType)
  userType: UserType;

  @Field(() => User, { nullable: true })
  coach?: User | null;

  @Field(() => [User], { nullable: true })
  coachees?: User[];

  @Field(() => User, { nullable: true })
  nutritionist?: User | null;

  @Field(() => [User], { nullable: true })
  clients?: User[];
}
