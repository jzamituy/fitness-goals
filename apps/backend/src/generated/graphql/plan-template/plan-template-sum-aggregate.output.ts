import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlanTemplateSumAggregate {

    @Field(() => Int, {nullable:true})
    duration?: number;
}
