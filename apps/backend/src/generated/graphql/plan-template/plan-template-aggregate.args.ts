import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanTemplateWhereInput } from './plan-template-where.input';
import { Type } from 'class-transformer';
import { PlanTemplateOrderByWithRelationInput } from './plan-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanTemplateWhereUniqueInput } from './plan-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanTemplateCountAggregateInput } from './plan-template-count-aggregate.input';
import { PlanTemplateAvgAggregateInput } from './plan-template-avg-aggregate.input';
import { PlanTemplateSumAggregateInput } from './plan-template-sum-aggregate.input';
import { PlanTemplateMinAggregateInput } from './plan-template-min-aggregate.input';
import { PlanTemplateMaxAggregateInput } from './plan-template-max-aggregate.input';

@ArgsType()
export class PlanTemplateAggregateArgs {

    @Field(() => PlanTemplateWhereInput, {nullable:true})
    @Type(() => PlanTemplateWhereInput)
    where?: PlanTemplateWhereInput;

    @Field(() => [PlanTemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlanTemplateOrderByWithRelationInput>;

    @Field(() => PlanTemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlanTemplateWhereUniqueInput, 'id' | 'name'>;

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
