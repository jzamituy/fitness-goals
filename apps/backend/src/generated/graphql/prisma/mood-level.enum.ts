import { registerEnumType } from '@nestjs/graphql';

export enum MoodLevel {
    VERY_BAD = "VERY_BAD",
    BAD = "BAD",
    NEUTRAL = "NEUTRAL",
    GOOD = "GOOD",
    VERY_GOOD = "VERY_GOOD"
}


registerEnumType(MoodLevel, { name: 'MoodLevel', description: undefined })
