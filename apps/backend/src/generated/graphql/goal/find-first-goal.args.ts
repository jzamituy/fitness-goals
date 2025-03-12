import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoalWhereInput } from './goal-where.input';
import { Type } from 'class-transformer';
import { GoalOrderByWithRelationInput } from './goal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GoalScalarFieldEnum } from './goal-scalar-field.enum';

@ArgsType()
export class FindFirstGoalArgs {

    @Field(() => GoalWhereInput, {nullable:true})
    @Type(() => GoalWhereInput)
    where?: GoalWhereInput;

    @Field(() => [GoalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GoalOrderByWithRelationInput>;

    @Field(() => GoalWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GoalWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GoalScalarFieldEnum], {nullable:true})
    distinct?: Array<`${GoalScalarFieldEnum}`>;
}
