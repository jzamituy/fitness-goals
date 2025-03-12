import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumPlanStatusFilter } from '../prisma/enum-plan-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class MemberPlanScalarWhereInput {

    @Field(() => [MemberPlanScalarWhereInput], {nullable:true})
    AND?: Array<MemberPlanScalarWhereInput>;

    @Field(() => [MemberPlanScalarWhereInput], {nullable:true})
    OR?: Array<MemberPlanScalarWhereInput>;

    @Field(() => [MemberPlanScalarWhereInput], {nullable:true})
    NOT?: Array<MemberPlanScalarWhereInput>;

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
}
