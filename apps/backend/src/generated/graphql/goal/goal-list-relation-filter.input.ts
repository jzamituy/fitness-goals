import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalWhereInput } from './goal-where.input';

@InputType()
export class GoalListRelationFilter {

    @Field(() => GoalWhereInput, {nullable:true})
    every?: GoalWhereInput;

    @Field(() => GoalWhereInput, {nullable:true})
    some?: GoalWhereInput;

    @Field(() => GoalWhereInput, {nullable:true})
    none?: GoalWhereInput;
}
