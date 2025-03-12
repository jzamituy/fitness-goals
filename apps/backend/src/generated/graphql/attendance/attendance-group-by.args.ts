import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttendanceWhereInput } from './attendance-where.input';
import { Type } from 'class-transformer';
import { AttendanceOrderByWithAggregationInput } from './attendance-order-by-with-aggregation.input';
import { AttendanceScalarFieldEnum } from './attendance-scalar-field.enum';
import { AttendanceScalarWhereWithAggregatesInput } from './attendance-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AttendanceCountAggregateInput } from './attendance-count-aggregate.input';
import { AttendanceMinAggregateInput } from './attendance-min-aggregate.input';
import { AttendanceMaxAggregateInput } from './attendance-max-aggregate.input';

@ArgsType()
export class AttendanceGroupByArgs {

    @Field(() => AttendanceWhereInput, {nullable:true})
    @Type(() => AttendanceWhereInput)
    where?: AttendanceWhereInput;

    @Field(() => [AttendanceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AttendanceOrderByWithAggregationInput>;

    @Field(() => [AttendanceScalarFieldEnum], {nullable:false})
    by!: Array<`${AttendanceScalarFieldEnum}`>;

    @Field(() => AttendanceScalarWhereWithAggregatesInput, {nullable:true})
    having?: AttendanceScalarWhereWithAggregatesInput;

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
