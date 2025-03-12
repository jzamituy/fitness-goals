import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoodCreateInput } from './mood-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoodArgs {

    @Field(() => MoodCreateInput, {nullable:false})
    @Type(() => MoodCreateInput)
    data!: MoodCreateInput;
}
