import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberScalarWhereInput } from './gym-member-scalar-where.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateManyMutationInput } from './gym-member-update-many-mutation.input';

@InputType()
export class GymMemberUpdateManyWithWhereWithoutNutritionistInput {

    @Field(() => GymMemberScalarWhereInput, {nullable:false})
    @Type(() => GymMemberScalarWhereInput)
    where!: GymMemberScalarWhereInput;

    @Field(() => GymMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => GymMemberUpdateManyMutationInput)
    data!: GymMemberUpdateManyMutationInput;
}
