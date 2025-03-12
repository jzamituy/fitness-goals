import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCategory } from './plan-category.enum';
import { NestedEnumPlanCategoryWithAggregatesFilter } from './nested-enum-plan-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPlanCategoryFilter } from './nested-enum-plan-category-filter.input';

@InputType()
export class EnumPlanCategoryWithAggregatesFilter {

    @Field(() => PlanCategory, {nullable:true})
    equals?: `${PlanCategory}`;

    @Field(() => [PlanCategory], {nullable:true})
    in?: Array<`${PlanCategory}`>;

    @Field(() => [PlanCategory], {nullable:true})
    notIn?: Array<`${PlanCategory}`>;

    @Field(() => NestedEnumPlanCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPlanCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPlanCategoryFilter, {nullable:true})
    _min?: NestedEnumPlanCategoryFilter;

    @Field(() => NestedEnumPlanCategoryFilter, {nullable:true})
    _max?: NestedEnumPlanCategoryFilter;
}
