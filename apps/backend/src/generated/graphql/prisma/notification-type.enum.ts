import { registerEnumType } from '@nestjs/graphql';

export enum NotificationType {
    EMAIL = "EMAIL",
    SMS = "SMS",
    WHATSAPP = "WHATSAPP",
    PUSH = "PUSH"
}


registerEnumType(NotificationType, { name: 'NotificationType', description: undefined })
