import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodLevel } from './mood-level.enum';

@InputType()
export class NestedEnumMoodLevelFilter {

    @Field(() => MoodLevel, {nullable:true})
    equals?: `${MoodLevel}`;

    @Field(() => [MoodLevel], {nullable:true})
    in?: Array<`${MoodLevel}`>;

    @Field(() => [MoodLevel], {nullable:true})
    notIn?: Array<`${MoodLevel}`>;

    @Field(() => NestedEnumMoodLevelFilter, {nullable:true})
    not?: NestedEnumMoodLevelFilter;
}
