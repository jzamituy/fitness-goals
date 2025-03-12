import { registerEnumType } from '@nestjs/graphql';

export enum GoalStatus {
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    INACTIVE = "INACTIVE",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(GoalStatus, { name: 'GoalStatus', description: undefined })
