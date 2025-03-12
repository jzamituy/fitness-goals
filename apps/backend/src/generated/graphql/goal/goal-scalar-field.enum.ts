import { registerEnumType } from '@nestjs/graphql';

export enum GoalScalarFieldEnum {
    id = "id",
    gymMemberId = "gymMemberId",
    type = "type",
    startDate = "startDate",
    endDate = "endDate",
    status = "status",
    diet = "diet",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(GoalScalarFieldEnum, { name: 'GoalScalarFieldEnum', description: undefined })
