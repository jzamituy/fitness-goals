import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceWhereInput } from './attendance-where.input';
import { Type } from 'class-transformer';
import { AttendanceOrderByWithRelationInput } from './attendance-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AttendanceCountAggregateInput } from './attendance-count-aggregate.input';
import { AttendanceMinAggregateInput } from './attendance-min-aggregate.input';
import { AttendanceMaxAggregateInput } from './attendance-max-aggregate.input';

@ArgsType()
export class AttendanceAggregateArgs {

    @Field(() => AttendanceWhereInput, {nullable:true})
    @Type(() => AttendanceWhereInput)
    where?: AttendanceWhereInput;

    @Field(() => [AttendanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AttendanceOrderByWithRelationInput>;

    @Field(() => AttendanceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AttendanceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AttendanceCountAggregateInput, {nullable:true})
    _count?: AttendanceCountAggregateInput;

    @Field(() => AttendanceMinAggregateInput, {nullable:true})
    _min?: AttendanceMinAggregateInput;

    @Field(() => AttendanceMaxAggregateInput, {nullable:true})
    _max?: AttendanceMaxAggregateInput;
}
