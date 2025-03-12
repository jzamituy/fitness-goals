import { registerEnumType } from '@nestjs/graphql';

export enum PlanCategory {
    WEIGHT_LOSS = "WEIGHT_LOSS",
    MUSCLE_GAIN = "MUSCLE_GAIN",
    CARDIO = "CARDIO",
    FLEXIBILITY = "FLEXIBILITY",
    GENERAL_FITNESS = "GENERAL_FITNESS",
    SPORTS_SPECIFIC = "SPORTS_SPECIFIC",
    REHABILITATION = "REHABILITATION"
}


registerEnumType(PlanCategory, { name: 'PlanCategory', description: undefined })
