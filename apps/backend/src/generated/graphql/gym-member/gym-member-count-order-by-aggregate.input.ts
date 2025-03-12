import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GymMemberCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    membershipId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    coachId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    nutritionistId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
