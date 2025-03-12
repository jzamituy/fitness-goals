import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodLevel } from './mood-level.enum';
import { NestedEnumMoodLevelFilter } from './nested-enum-mood-level-filter.input';

@InputType()
export class EnumMoodLevelFilter {

    @Field(() => MoodLevel, {nullable:true})
    equals?: `${MoodLevel}`;

    @Field(() => [MoodLevel], {nullable:true})
    in?: Array<`${MoodLevel}`>;

    @Field(() => [MoodLevel], {nullable:true})
    notIn?: Array<`${MoodLevel}`>;

    @Field(() => NestedEnumMoodLevelFilter, {nullable:true})
    not?: NestedEnumMoodLevelFilter;
}
