import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from '../../generated/graphql';

export enum AttendanceStatus {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
}

registerEnumType(AttendanceStatus, {
  name: 'AttendanceStatus',
});

@ObjectType()
export class Attendance {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field()
  date: Date;

  @Field(() => AttendanceStatus)
  status: AttendanceStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
