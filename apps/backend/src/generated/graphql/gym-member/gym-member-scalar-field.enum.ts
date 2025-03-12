import { registerEnumType } from '@nestjs/graphql';

export enum GymMemberScalarFieldEnum {
    id = "id",
    userId = "userId",
    membershipId = "membershipId",
    startDate = "startDate",
    endDate = "endDate",
    coachId = "coachId",
    nutritionistId = "nutritionistId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(GymMemberScalarFieldEnum, { name: 'GymMemberScalarFieldEnum', description: undefined })
