import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class GymMemberScalarWhereInput {

    @Field(() => [GymMemberScalarWhereInput], {nullable:true})
    AND?: Array<GymMemberScalarWhereInput>;

    @Field(() => [GymMemberScalarWhereInput], {nullable:true})
    OR?: Array<GymMemberScalarWhereInput>;

    @Field(() => [GymMemberScalarWhereInput], {nullable:true})
    NOT?: Array<GymMemberScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    userId?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    membershipId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    coachId?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    nutritionistId?: UuidNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
