import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlanCategory } from '../prisma/plan-category.enum';
import { PlanLevel } from '../prisma/plan-level.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlanTemplateMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PlanCategory, {nullable:true})
    category?: `${PlanCategory}`;

    @Field(() => PlanLevel, {nullable:true})
    level?: `${PlanLevel}`;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
