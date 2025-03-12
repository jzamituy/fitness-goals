import { registerEnumType } from '@nestjs/graphql';

export enum PermissionResource {
    USERS = "USERS",
    ROLES = "ROLES",
    GOALS = "GOALS",
    ATTENDANCES = "ATTENDANCES",
    MOODS = "MOODS",
    ALERTS = "ALERTS",
    NOTIFICATIONS = "NOTIFICATIONS",
    PROFILES = "PROFILES"
}


registerEnumType(PermissionResource, { name: 'PermissionResource', description: undefined })
