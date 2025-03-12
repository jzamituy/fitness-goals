import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCategory } from '../prisma/plan-category.enum';
import { PlanLevel } from '../prisma/plan-level.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class PlanTemplateCreateWithoutMemberPlansInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => PlanCategory, {nullable:false})
    category!: `${PlanCategory}`;

    @Field(() => PlanLevel, {nullable:false})
    level!: `${PlanLevel}`;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
