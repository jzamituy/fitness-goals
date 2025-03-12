import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoodWhereInput } from './mood-where.input';
import { Type } from 'class-transformer';
import { MoodOrderByWithRelationInput } from './mood-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoodWhereUniqueInput } from './mood-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoodCountAggregateInput } from './mood-count-aggregate.input';
import { MoodMinAggregateInput } from './mood-min-aggregate.input';
import { MoodMaxAggregateInput } from './mood-max-aggregate.input';

@ArgsType()
export class MoodAggregateArgs {

    @Field(() => MoodWhereInput, {nullable:true})
    @Type(() => MoodWhereInput)
    where?: MoodWhereInput;

    @Field(() => [MoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoodOrderByWithRelationInput>;

    @Field(() => MoodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoodWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoodCountAggregateInput, {nullable:true})
    _count?: MoodCountAggregateInput;

    @Field(() => MoodMinAggregateInput, {nullable:true})
    _min?: MoodMinAggregateInput;

    @Field(() => MoodMaxAggregateInput, {nullable:true})
    _max?: MoodMaxAggregateInput;
}
