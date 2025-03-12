import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GymMemberUpdateManyMutationInput } from './gym-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyGymMemberArgs {

    @Field(() => GymMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => GymMemberUpdateManyMutationInput)
    data!: GymMemberUpdateManyMutationInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
