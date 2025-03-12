import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { GymMemberListRelationFilter } from '../gym-member/gym-member-list-relation-filter.input';

@InputType()
export class NutritionistWhereInput {

    @Field(() => [NutritionistWhereInput], {nullable:true})
    AND?: Array<NutritionistWhereInput>;

    @Field(() => [NutritionistWhereInput], {nullable:true})
    OR?: Array<NutritionistWhereInput>;

    @Field(() => [NutritionistWhereInput], {nullable:true})
    NOT?: Array<NutritionistWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    userId?: UuidFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    specialties?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    certification?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    experience?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    biography?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    availability?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => GymMemberListRelationFilter, {nullable:true})
    gymMembers?: GymMemberListRelationFilter;
}
