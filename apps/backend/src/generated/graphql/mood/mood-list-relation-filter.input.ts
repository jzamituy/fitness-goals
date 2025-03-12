import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodWhereInput } from './mood-where.input';

@InputType()
export class MoodListRelationFilter {

    @Field(() => MoodWhereInput, {nullable:true})
    every?: MoodWhereInput;

    @Field(() => MoodWhereInput, {nullable:true})
    some?: MoodWhereInput;

    @Field(() => MoodWhereInput, {nullable:true})
    none?: MoodWhereInput;
}
