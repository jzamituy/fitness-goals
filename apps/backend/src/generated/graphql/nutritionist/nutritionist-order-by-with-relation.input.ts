import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { GymMemberOrderByRelationAggregateInput } from '../gym-member/gym-member-order-by-relation-aggregate.input';

@InputType()
export class NutritionistOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    specialties?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    certification?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    experience?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    biography?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    availability?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => GymMemberOrderByRelationAggregateInput, {nullable:true})
    gymMembers?: GymMemberOrderByRelationAggregateInput;
}
