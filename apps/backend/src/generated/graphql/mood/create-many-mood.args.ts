import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoodCreateManyInput } from './mood-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoodArgs {

    @Field(() => [MoodCreateManyInput], {nullable:false})
    @Type(() => MoodCreateManyInput)
    data!: Array<MoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
