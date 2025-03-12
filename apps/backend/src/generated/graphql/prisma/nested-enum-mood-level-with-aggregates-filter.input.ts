import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodLevel } from './mood-level.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMoodLevelFilter } from './nested-enum-mood-level-filter.input';

@InputType()
export class NestedEnumMoodLevelWithAggregatesFilter {

    @Field(() => MoodLevel, {nullable:true})
    equals?: `${MoodLevel}`;

    @Field(() => [MoodLevel], {nullable:true})
    in?: Array<`${MoodLevel}`>;

    @Field(() => [MoodLevel], {nullable:true})
    notIn?: Array<`${MoodLevel}`>;

    @Field(() => NestedEnumMoodLevelWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMoodLevelWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMoodLevelFilter, {nullable:true})
    _min?: NestedEnumMoodLevelFilter;

    @Field(() => NestedEnumMoodLevelFilter, {nullable:true})
    _max?: NestedEnumMoodLevelFilter;
}
