import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPlanCategoryWithAggregatesFilter } from '../prisma/enum-plan-category-with-aggregates-filter.input';
import { EnumPlanLevelWithAggregatesFilter } from '../prisma/enum-plan-level-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PlanTemplateScalarWhereWithAggregatesInput {

    @Field(() => [PlanTemplateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlanTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [PlanTemplateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlanTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [PlanTemplateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlanTemplateScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumPlanCategoryWithAggregatesFilter, {nullable:true})
    category?: EnumPlanCategoryWithAggregatesFilter;

    @Field(() => EnumPlanLevelWithAggregatesFilter, {nullable:true})
    level?: EnumPlanLevelWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    duration?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
