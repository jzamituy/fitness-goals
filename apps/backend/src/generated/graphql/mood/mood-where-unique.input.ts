import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodWhereInput } from './mood-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumMoodLevelFilter } from '../prisma/enum-mood-level-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { GymMemberScalarRelationFilter } from '../gym-member/gym-member-scalar-relation-filter.input';

@InputType()
export class MoodWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [MoodWhereInput], {nullable:true})
    AND?: Array<MoodWhereInput>;

    @Field(() => [MoodWhereInput], {nullable:true})
    OR?: Array<MoodWhereInput>;

    @Field(() => [MoodWhereInput], {nullable:true})
    NOT?: Array<MoodWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    gymMemberId?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => EnumMoodLevelFilter, {nullable:true})
    level?: EnumMoodLevelFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => GymMemberScalarRelationFilter, {nullable:true})
    gymMember?: GymMemberScalarRelationFilter;
}
