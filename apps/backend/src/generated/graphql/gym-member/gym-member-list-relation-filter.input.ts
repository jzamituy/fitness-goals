import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberListRelationFilter {

    @Field(() => GymMemberWhereInput, {nullable:true})
    every?: GymMemberWhereInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    some?: GymMemberWhereInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    none?: GymMemberWhereInput;
}
