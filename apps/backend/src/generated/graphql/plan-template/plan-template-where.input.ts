import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPlanCategoryFilter } from '../prisma/enum-plan-category-filter.input';
import { EnumPlanLevelFilter } from '../prisma/enum-plan-level-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MemberPlanListRelationFilter } from '../member-plan/member-plan-list-relation-filter.input';

@InputType()
export class PlanTemplateWhereInput {

    @Field(() => [PlanTemplateWhereInput], {nullable:true})
    AND?: Array<PlanTemplateWhereInput>;

    @Field(() => [PlanTemplateWhereInput], {nullable:true})
    OR?: Array<PlanTemplateWhereInput>;

    @Field(() => [PlanTemplateWhereInput], {nullable:true})
    NOT?: Array<PlanTemplateWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumPlanCategoryFilter, {nullable:true})
    category?: EnumPlanCategoryFilter;

    @Field(() => EnumPlanLevelFilter, {nullable:true})
    level?: EnumPlanLevelFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MemberPlanListRelationFilter, {nullable:true})
    memberPlans?: MemberPlanListRelationFilter;
}
