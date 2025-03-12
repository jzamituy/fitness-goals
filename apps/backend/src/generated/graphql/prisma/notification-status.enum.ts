import { registerEnumType } from '@nestjs/graphql';

export enum NotificationStatus {
    SENT = "SENT",
    FAILED = "FAILED",
    PENDING = "PENDING"
}


registerEnumType(NotificationStatus, { name: 'NotificationStatus', description: undefined })
