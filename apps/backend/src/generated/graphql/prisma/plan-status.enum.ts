import { registerEnumType } from '@nestjs/graphql';

export enum PlanStatus {
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED"
}


registerEnumType(PlanStatus, { name: 'PlanStatus', description: undefined })
