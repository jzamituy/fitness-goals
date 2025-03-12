import { registerEnumType } from '@nestjs/graphql';

export enum PlanTemplateScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    category = "category",
    level = "level",
    duration = "duration",
    isActive = "isActive",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PlanTemplateScalarFieldEnum, { name: 'PlanTemplateScalarFieldEnum', description: undefined })
