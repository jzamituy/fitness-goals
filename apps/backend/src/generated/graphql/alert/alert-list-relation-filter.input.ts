import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertWhereInput } from './alert-where.input';

@InputType()
export class AlertListRelationFilter {

    @Field(() => AlertWhereInput, {nullable:true})
    every?: AlertWhereInput;

    @Field(() => AlertWhereInput, {nullable:true})
    some?: AlertWhereInput;

    @Field(() => AlertWhereInput, {nullable:true})
    none?: AlertWhereInput;
}
