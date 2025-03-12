import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from '../../generated/graphql';

export enum NotificationType {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  WHATSAPP = 'WHATSAPP',
  PUSH = 'PUSH',
}

export enum NotificationStatus {
  SENT = 'SENT',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
}

registerEnumType(NotificationType, {
  name: 'NotificationType',
});

registerEnumType(NotificationStatus, {
  name: 'NotificationStatus',
});

@ObjectType()
export class Notification {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field(() => NotificationType)
  type: NotificationType;

  @Field()
  content: string;

  @Field(() => NotificationStatus)
  status: NotificationStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
