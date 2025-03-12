import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoodUpdateManyMutationInput } from './mood-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoodWhereInput } from './mood-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoodArgs {

    @Field(() => MoodUpdateManyMutationInput, {nullable:false})
    @Type(() => MoodUpdateManyMutationInput)
    data!: MoodUpdateManyMutationInput;

    @Field(() => MoodWhereInput, {nullable:true})
    @Type(() => MoodWhereInput)
    where?: MoodWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
