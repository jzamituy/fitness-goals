import { registerEnumType } from '@nestjs/graphql';

export enum AttendanceStatus {
    PRESENT = "PRESENT",
    ABSENT = "ABSENT"
}


registerEnumType(AttendanceStatus, { name: 'AttendanceStatus', description: undefined })
