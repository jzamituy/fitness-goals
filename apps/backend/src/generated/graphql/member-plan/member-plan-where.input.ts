import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumPlanStatusFilter } from '../prisma/enum-plan-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { GymMemberScalarRelationFilter } from '../gym-member/gym-member-scalar-relation-filter.input';
import { PlanTemplateScalarRelationFilter } from '../plan-template/plan-template-scalar-relation-filter.input';

@InputType()
export class MemberPlanWhereInput {

    @Field(() => [MemberPlanWhereInput], {nullable:true})
    AND?: Array<MemberPlanWhereInput>;

    @Field(() => [MemberPlanWhereInput], {nullable:true})
    OR?: Array<MemberPlanWhereInput>;

    @Field(() => [MemberPlanWhereInput], {nullable:true})
    NOT?: Array<MemberPlanWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    gymMemberId?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    planTemplateId?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => EnumPlanStatusFilter, {nullable:true})
    status?: EnumPlanStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => GymMemberScalarRelationFilter, {nullable:true})
    gymMember?: GymMemberScalarRelationFilter;

    @Field(() => PlanTemplateScalarRelationFilter, {nullable:true})
    planTemplate?: PlanTemplateScalarRelationFilter;
}
