import { registerEnumType } from '@nestjs/graphql';

export enum NutritionistScalarFieldEnum {
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


registerEnumType(NutritionistScalarFieldEnum, { name: 'NutritionistScalarFieldEnum', description: undefined })
