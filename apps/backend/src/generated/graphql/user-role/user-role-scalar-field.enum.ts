import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleScalarFieldEnum {
    id = "id",
    userId = "userId",
    roleId = "roleId",
    createdAt = "createdAt"
}


registerEnumType(UserRoleScalarFieldEnum, { name: 'UserRoleScalarFieldEnum', description: undefined })
