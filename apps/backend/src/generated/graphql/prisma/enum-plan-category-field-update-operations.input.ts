import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCategory } from './plan-category.enum';

@InputType()
export class EnumPlanCategoryFieldUpdateOperationsInput {

    @Field(() => PlanCategory, {nullable:true})
    set?: `${PlanCategory}`;
}
