import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AttendanceCountOrderByAggregateInput } from './attendance-count-order-by-aggregate.input';
import { AttendanceMaxOrderByAggregateInput } from './attendance-max-order-by-aggregate.input';
import { AttendanceMinOrderByAggregateInput } from './attendance-min-order-by-aggregate.input';

@InputType()
export class AttendanceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gymMemberId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AttendanceCountOrderByAggregateInput, {nullable:true})
    _count?: AttendanceCountOrderByAggregateInput;

    @Field(() => AttendanceMaxOrderByAggregateInput, {nullable:true})
    _max?: AttendanceMaxOrderByAggregateInput;

    @Field(() => AttendanceMinOrderByAggregateInput, {nullable:true})
    _min?: AttendanceMinOrderByAggregateInput;
}
