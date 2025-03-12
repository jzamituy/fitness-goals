import { registerEnumType } from '@nestjs/graphql';

export enum RolePermissionScalarFieldEnum {
    id = "id",
    roleId = "roleId",
    permissionId = "permissionId",
    createdAt = "createdAt"
}


registerEnumType(RolePermissionScalarFieldEnum, { name: 'RolePermissionScalarFieldEnum', description: undefined })
