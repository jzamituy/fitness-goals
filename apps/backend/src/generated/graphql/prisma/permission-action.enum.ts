import { registerEnumType } from '@nestjs/graphql';

export enum PermissionAction {
    CREATE = "CREATE",
    READ = "READ",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    MANAGE = "MANAGE"
}


registerEnumType(PermissionAction, { name: 'PermissionAction', description: undefined })
