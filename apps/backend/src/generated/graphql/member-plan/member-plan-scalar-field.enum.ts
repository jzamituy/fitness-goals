import { registerEnumType } from '@nestjs/graphql';

export enum MemberPlanScalarFieldEnum {
    id = "id",
    gymMemberId = "gymMemberId",
    planTemplateId = "planTemplateId",
    startDate = "startDate",
    endDate = "endDate",
    status = "status",
    notes = "notes",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MemberPlanScalarFieldEnum, { name: 'MemberPlanScalarFieldEnum', description: undefined })
