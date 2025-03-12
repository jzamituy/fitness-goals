import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    phone = "phone",
    dateOfBirth = "dateOfBirth",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status",
    imageUrl = "imageUrl"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
