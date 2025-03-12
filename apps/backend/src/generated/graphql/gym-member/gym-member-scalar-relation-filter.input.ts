import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberScalarRelationFilter {

    @Field(() => GymMemberWhereInput, {nullable:true})
    is?: GymMemberWhereInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    isNot?: GymMemberWhereInput;
}
