import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';

export enum AlertType {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export enum AlertStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
}

registerEnumType(AlertType, {
  name: 'AlertType',
});

registerEnumType(AlertStatus, {
  name: 'AlertStatus',
});

@ObjectType()
export class Alert {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field(() => AlertType)
  type: AlertType;

  @Field()
  reason: string;

  @Field(() => AlertStatus)
  status: AlertStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
