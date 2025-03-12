import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumUserStatusFilter } from '../prisma/enum-user-status-filter.input';
import { UserRoleListRelationFilter } from '../user-role/user-role-list-relation-filter.input';
import { GymMemberNullableScalarRelationFilter } from '../gym-member/gym-member-nullable-scalar-relation-filter.input';
import { CoachNullableScalarRelationFilter } from '../coach/coach-nullable-scalar-relation-filter.input';
import { NutritionistNullableScalarRelationFilter } from '../nutritionist/nutritionist-nullable-scalar-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dateOfBirth?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumUserStatusFilter, {nullable:true})
    status?: EnumUserStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => UserRoleListRelationFilter, {nullable:true})
    userRoles?: UserRoleListRelationFilter;

    @Field(() => GymMemberNullableScalarRelationFilter, {nullable:true})
    gymMember?: GymMemberNullableScalarRelationFilter;

    @Field(() => CoachNullableScalarRelationFilter, {nullable:true})
    coach?: CoachNullableScalarRelationFilter;

    @Field(() => NutritionistNullableScalarRelationFilter, {nullable:true})
    nutritionist?: NutritionistNullableScalarRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;
}
