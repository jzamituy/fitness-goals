import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanTemplateWhereInput } from './plan-template-where.input';
import { Type } from 'class-transformer';
import { PlanTemplateOrderByWithAggregationInput } from './plan-template-order-by-with-aggregation.input';
import { PlanTemplateScalarFieldEnum } from './plan-template-scalar-field.enum';
import { PlanTemplateScalarWhereWithAggregatesInput } from './plan-template-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlanTemplateCountAggregateInput } from './plan-template-count-aggregate.input';
import { PlanTemplateAvgAggregateInput } from './plan-template-avg-aggregate.input';
import { PlanTemplateSumAggregateInput } from './plan-template-sum-aggregate.input';
import { PlanTemplateMinAggregateInput } from './plan-template-min-aggregate.input';
import { PlanTemplateMaxAggregateInput } from './plan-template-max-aggregate.input';

@ArgsType()
export class PlanTemplateGroupByArgs {

    @Field(() => PlanTemplateWhereInput, {nullable:true})
    @Type(() => PlanTemplateWhereInput)
    where?: PlanTemplateWhereInput;

    @Field(() => [PlanTemplateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlanTemplateOrderByWithAggregationInput>;

    @Field(() => [PlanTemplateScalarFieldEnum], {nullable:false})
    by!: Array<`${PlanTemplateScalarFieldEnum}`>;

    @Field(() => PlanTemplateScalarWhereWithAggregatesInput, {nullable:true})
    having?: PlanTemplateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlanTemplateCountAggregateInput, {nullable:true})
    _count?: PlanTemplateCountAggregateInput;

    @Field(() => PlanTemplateAvgAggregateInput, {nullable:true})
    _avg?: PlanTemplateAvgAggregateInput;

    @Field(() => PlanTemplateSumAggregateInput, {nullable:true})
    _sum?: PlanTemplateSumAggregateInput;

    @Field(() => PlanTemplateMinAggregateInput, {nullable:true})
    _min?: PlanTemplateMinAggregateInput;

    @Field(() => PlanTemplateMaxAggregateInput, {nullable:true})
    _max?: PlanTemplateMaxAggregateInput;
}
