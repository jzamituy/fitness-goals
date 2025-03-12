import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistCreatespecialtiesInput } from './nutritionist-createspecialties.input';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutNutritionistInput } from '../user/user-create-nested-one-without-nutritionist.input';
import { GymMemberCreateNestedManyWithoutNutritionistInput } from '../gym-member/gym-member-create-nested-many-without-nutritionist.input';

@InputType()
export class NutritionistCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => NutritionistCreatespecialtiesInput, {nullable:true})
    specialties?: NutritionistCreatespecialtiesInput;

    @Field(() => String, {nullable:true})
    certification?: string;

    @Field(() => Int, {nullable:true})
    experience?: number;

    @Field(() => String, {nullable:true})
    biography?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    availability?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutNutritionistInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNutritionistInput;

    @Field(() => GymMemberCreateNestedManyWithoutNutritionistInput, {nullable:true})
    gymMembers?: GymMemberCreateNestedManyWithoutNutritionistInput;
}
