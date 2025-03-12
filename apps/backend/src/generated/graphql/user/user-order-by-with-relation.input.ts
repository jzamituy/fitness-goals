import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserRoleOrderByRelationAggregateInput } from '../user-role/user-role-order-by-relation-aggregate.input';
import { GymMemberOrderByWithRelationInput } from '../gym-member/gym-member-order-by-with-relation.input';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';
import { NutritionistOrderByWithRelationInput } from '../nutritionist/nutritionist-order-by-with-relation.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    imageUrl?: SortOrderInput;

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    userRoles?: UserRoleOrderByRelationAggregateInput;

    @Field(() => GymMemberOrderByWithRelationInput, {nullable:true})
    gymMember?: GymMemberOrderByWithRelationInput;

    @Field(() => CoachOrderByWithRelationInput, {nullable:true})
    coach?: CoachOrderByWithRelationInput;

    @Field(() => NutritionistOrderByWithRelationInput, {nullable:true})
    nutritionist?: NutritionistOrderByWithRelationInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;
}
