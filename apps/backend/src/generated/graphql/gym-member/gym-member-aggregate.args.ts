import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberOrderByWithRelationInput } from './gym-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GymMemberCountAggregateInput } from './gym-member-count-aggregate.input';
import { GymMemberMinAggregateInput } from './gym-member-min-aggregate.input';
import { GymMemberMaxAggregateInput } from './gym-member-max-aggregate.input';

@ArgsType()
export class GymMemberAggregateArgs {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => [GymMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GymMemberOrderByWithRelationInput>;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GymMemberCountAggregateInput, {nullable:true})
    _count?: GymMemberCountAggregateInput;

    @Field(() => GymMemberMinAggregateInput, {nullable:true})
    _min?: GymMemberMinAggregateInput;

    @Field(() => GymMemberMaxAggregateInput, {nullable:true})
    _max?: GymMemberMaxAggregateInput;
}
