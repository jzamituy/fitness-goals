import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodLevel } from './mood-level.enum';

@InputType()
export class EnumMoodLevelFieldUpdateOperationsInput {

    @Field(() => MoodLevel, {nullable:true})
    set?: `${MoodLevel}`;
}
