import { registerEnumType } from '@nestjs/graphql';

export enum AlertScalarFieldEnum {
    id = "id",
    gymMemberId = "gymMemberId",
    type = "type",
    reason = "reason",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AlertScalarFieldEnum, { name: 'AlertScalarFieldEnum', description: undefined })
