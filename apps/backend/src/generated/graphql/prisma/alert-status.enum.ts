import { registerEnumType } from '@nestjs/graphql';

export enum AlertStatus {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}


registerEnumType(AlertStatus, { name: 'AlertStatus', description: undefined })
