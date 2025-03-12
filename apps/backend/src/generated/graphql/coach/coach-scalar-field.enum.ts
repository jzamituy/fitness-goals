import { registerEnumType } from '@nestjs/graphql';

export enum CoachScalarFieldEnum {
    id = "id",
    userId = "userId",
    specialties = "specialties",
    certification = "certification",
    experience = "experience",
    biography = "biography",
    availability = "availability",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CoachScalarFieldEnum, { name: 'CoachScalarFieldEnum', description: undefined })
