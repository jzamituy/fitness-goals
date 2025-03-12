import { registerEnumType } from '@nestjs/graphql';

export enum MoodScalarFieldEnum {
    id = "id",
    gymMemberId = "gymMemberId",
    date = "date",
    level = "level",
    notes = "notes",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MoodScalarFieldEnum, { name: 'MoodScalarFieldEnum', description: undefined })
