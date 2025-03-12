import { registerEnumType } from '@nestjs/graphql';

export enum AttendanceScalarFieldEnum {
    id = "id",
    gymMemberId = "gymMemberId",
    date = "date",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AttendanceScalarFieldEnum, { name: 'AttendanceScalarFieldEnum', description: undefined })
