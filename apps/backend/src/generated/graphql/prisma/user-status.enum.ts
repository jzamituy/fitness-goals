import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(UserStatus, { name: 'UserStatus', description: undefined })
