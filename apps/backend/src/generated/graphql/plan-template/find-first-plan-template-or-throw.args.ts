import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanTemplateWhereInput } from './plan-template-where.input';
import { Type } from 'class-transformer';
import { PlanTemplateOrderByWithRelationInput } from './plan-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanTemplateWhereUniqueInput } from './plan-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanTemplateScalarFieldEnum } from './plan-template-scalar-field.enum';

@ArgsType()
export class FindFirstPlanTemplateOrThrowArgs {

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

    @Field(() => [PlanTemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PlanTemplateScalarFieldEnum}`>;
}
