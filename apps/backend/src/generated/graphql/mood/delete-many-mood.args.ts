import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoodWhereInput } from './mood-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoodArgs {

    @Field(() => MoodWhereInput, {nullable:true})
    @Type(() => MoodWhereInput)
    where?: MoodWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
