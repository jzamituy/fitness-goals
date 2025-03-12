import { registerEnumType } from '@nestjs/graphql';

export enum PlanLevel {
    BASIC = "BASIC",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
    PREMIUM = "PREMIUM"
}


registerEnumType(PlanLevel, { name: 'PlanLevel', description: undefined })
