import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCategory } from './plan-category.enum';
import { NestedEnumPlanCategoryFilter } from './nested-enum-plan-category-filter.input';

@InputType()
export class EnumPlanCategoryFilter {

    @Field(() => PlanCategory, {nullable:true})
    equals?: `${PlanCategory}`;

    @Field(() => [PlanCategory], {nullable:true})
    in?: Array<`${PlanCategory}`>;

    @Field(() => [PlanCategory], {nullable:true})
    notIn?: Array<`${PlanCategory}`>;

    @Field(() => NestedEnumPlanCategoryFilter, {nullable:true})
    not?: NestedEnumPlanCategoryFilter;
}
