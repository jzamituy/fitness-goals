import { registerEnumType } from '@nestjs/graphql';

export enum UserType {
  COACH = 'COACH',
  NUTRITIONIST = 'NUTRITIONIST',
  GYM_MEMBER = 'GYM_MEMBER',
}

registerEnumType(UserType, {
  name: 'UserType',
});
