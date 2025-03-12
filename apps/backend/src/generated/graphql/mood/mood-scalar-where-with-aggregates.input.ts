import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumMoodLevelWithAggregatesFilter } from '../prisma/enum-mood-level-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class MoodScalarWhereWithAggregatesInput {

    @Field(() => [MoodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoodScalarWhereWithAggregatesInput>;

    @Field(() => [MoodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoodScalarWhereWithAggregatesInput>;

    @Field(() => [MoodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoodScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    gymMemberId?: UuidWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => EnumMoodLevelWithAggregatesFilter, {nullable:true})
    level?: EnumMoodLevelWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
