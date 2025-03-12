import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GymMemberOrderByWithRelationInput } from '../gym-member/gym-member-order-by-with-relation.input';
import { PlanTemplateOrderByWithRelationInput } from '../plan-template/plan-template-order-by-with-relation.input';

@InputType()
export class MemberPlanOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gymMemberId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planTemplateId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => GymMemberOrderByWithRelationInput, {nullable:true})
    gymMember?: GymMemberOrderByWithRelationInput;

    @Field(() => PlanTemplateOrderByWithRelationInput, {nullable:true})
    planTemplate?: PlanTemplateOrderByWithRelationInput;
}
