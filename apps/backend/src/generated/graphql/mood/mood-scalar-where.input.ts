import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumMoodLevelFilter } from '../prisma/enum-mood-level-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class MoodScalarWhereInput {

    @Field(() => [MoodScalarWhereInput], {nullable:true})
    AND?: Array<MoodScalarWhereInput>;

    @Field(() => [MoodScalarWhereInput], {nullable:true})
    OR?: Array<MoodScalarWhereInput>;

    @Field(() => [MoodScalarWhereInput], {nullable:true})
    NOT?: Array<MoodScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

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
}
